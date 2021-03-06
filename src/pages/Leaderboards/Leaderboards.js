import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LeaderTable from './../../components/LeaderTable/LeaderTable';
import { MapSelect } from './../../components/MapSelect/MapSelect';
import { ModeSelect } from './../../components/ModeSelect/ModeSelect'; 
import { db } from './../../config/constants';

import './Leaderboards.css';

export default class Leaderboards extends Component {

  state = { 
    map: '',
    mode: '',
    users: []
  }

  componentDidMount() {
    this.ref = db.ref(`/stats/`);
    this.ref.on('value', snap => {
      this.snap = snap.val();
      this.processSnap(snap.val());
    })
  }

  componentWillUnmount() {
    this.ref.off();
  }

  processSnap(snap, map, mode) {
    const users = [];
    //console.log(snap);
    for (let key in snap) {
      if (!snap.hasOwnProperty(key)) continue;

      const aggregates = this.getAggregates(snap[key].matches, map, mode);
      //console.log(key, snap[key]);
      users.push({
        uid: key,
        photo: snap[key].user ? snap[key].user.photo : null,
        name: snap[key].user ? snap[key].user.gamertag : null,
        ...aggregates
      })

    }

    //return users;
    //console.log(users);
    this.setState({ 
      users,
      map,
      mode
    });
  }

  getAggregates(matches, map = this.state.map, mode = this.state.mode) {
    const aggregate = {
      kd: 0,
      kills: 0,
      deaths: 0,
      assists: 0,
      wl: 0,
      w: 0,
      l: 0,
      t: 0
    }

    for (let key in matches) {
      if (!matches.hasOwnProperty(key)) continue;
      const { kills, deaths, assists, outcome } = matches[key];

      if((matches[key].map === map || map === '') && (matches[key].mode === mode || mode === '')) {

        //console.log(matches[key]);

        aggregate.kills += kills;
        aggregate.deaths += deaths;
        aggregate.assists += assists;

        if(outcome === 'W') aggregate.w++;
        if(outcome === 'L') aggregate.l++;
        if(outcome === 'T') aggregate.t++;

      }
      
    }

    aggregate.kd = parseFloat((aggregate.kills / aggregate.deaths).toFixed(2));
    if(this.isInvalid(aggregate.kd)) aggregate.kd = '-';

    aggregate.wl = parseFloat((aggregate.w / aggregate.l).toFixed(2));
    if(this.isInvalid(aggregate.wl)) aggregate.wl = '-';

    //console.log(aggregate);
    return aggregate;
  }

  isInvalid(value) {
    return (isNaN(value) || !isFinite(value));
  }

  mapSelect(map) {
    //this.setState({ map });
    console.log(map);
    this.processSnap(this.snap, map);
  }

  modeSelect(mode) {
    console.log(mode);
    //this.setState({ mode });
    this.processSnap(this.snap, null, mode);
  }

  render() {
    return (
      <Container className="section">

        <Row>
          <Col sm="6" xs="12" className="section">
            <h2 className="blue">Leaderboards</h2>
          </Col>
          <Col sm="3" xs="6" className="section">
            <MapSelect disabled OnSelect={map => this.mapSelect(map)} map={this.state.map}/>
          </Col>
          <Col sm="3" xs="6" className="section">
            <ModeSelect disabled OnSelect={mode => this.modeSelect(mode)} mode={this.state.mode}/>
          </Col>
        </Row>

        <Row className="section">
          <Col xs="12">
            <LeaderTable id="overall" users={this.state.users} />
          </Col>
        </Row>

      </Container>
    );
  }
}