import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import { db, firebaseAuth } from './../../config/constants';

import 'react-dates/lib/css/_datepicker.css';
import './NewMatch.css';

export default class NewMatch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      outcome: '',
      mode: 'snd',
      map: 'vacant',
      kills: '',
      deaths: '',
      assists: '',
      roundWins: '',
      roundLosses:'',
      date: moment()
    }

    this.reset = this.reset.bind(this);
    this.submitMatch = this.submitMatch.bind(this);
    this.getWinLossRatio = this.getWinLossRatio.bind(this);
    this.getKDRatio = this.getKDRatio.bind(this);
    this.onMapChange = this.onMapChange.bind(this);
    this.onModeChange = this.onModeChange.bind(this);
  }

  reset() {
    this.setState({
      outcome: '',
      mode: 'snd',
      map: 'vacant',
      kills: '',
      deaths: '',
      assists: '',
      roundWins: '',
      roundLosses: '',
      date: moment()
    });
  }

  onMapChange(ev) {
    this.setState({map: ev.target.value});
  }

  onModeChange(ev) {
    this.setState({mode: ev.target.value});
  }

  getKDRatio() {
    const { kills, deaths } = this.state;
    const k = parseInt(kills, 10);
    const d = parseInt(deaths, 10);

    const ratio = k / d;

    if (k > 0 && d === 0) {
      return k;
    }

    if (d > 0 && k === 0) {
      return 0;
    }

    if (isNaN(ratio) || !isFinite(ratio)) {
      return '';
    } else {
      return (ratio).toFixed(2);
    }

  }

  getWinLossRatio() {
    const { roundWins, roundLosses } = this.state;
    const w = parseInt(roundWins, 10);
    const l = parseInt(roundLosses, 10);

    const ratio = w / l;

    if (w > 0 && l === 0) {
      return roundWins;
    }

    if (l > 0 && w === 0) {
      return 0;
    }

    if (isNaN(ratio) || !isFinite(ratio)) {
      return '';
    } else {
      return (ratio).toFixed(2);
    }
  }

  submitMatch() {
    const { outcome, mode, map, kills, deaths, assists, roundWins, roundLosses, date } = this.state;
    const uid = firebaseAuth().currentUser.uid;

    const match = {
      uid: uid,
      outcome: outcome,
      mode: mode,
      map: map,
      kills: parseInt(kills, 10) || 0,
      deaths: parseInt(deaths, 10) || 0,
      kdRatio: parseFloat(this.getKDRatio()) || 0,
      assists: parseInt(assists, 10) || 0,
      roundWins: parseInt(roundWins, 10) || 0,
      roundLosses: parseInt(roundLosses, 10) || 0,
      roundRatio: parseFloat(this.getWinLossRatio()) || 0,
      date: date.toISOString()
    }

    db.ref(`stats/${uid}/matches`).push(match)
    .catch(err => console.error(err));
  }

  render() {
    return (
      <Container>
        <h3 className="section">New Match</h3>
          <Row className="section">
            <Col sm="4" xs="12">
              <Button style={{marginBottom: '10px'}} 
                      color="success" 
                      size="lg" 
                      block
                      onClick={() => this.setState({ outcome: 'W' })} 
                      outline={this.state.outcome === 'W' || this.state.outcome === '' ? false : true}>
                <FontAwesome name="trophy" /> WIN
              </Button>
            </Col>
            <Col sm="4" xs="12">
              <Button style={{marginBottom: '10px'}} 
                      color="danger" 
                      onClick={() => this.setState({ outcome: 'L' })} 
                      outline={this.state.outcome === 'L' || this.state.outcome === '' ? false : true} 
                      size="lg" 
                      block>
                <FontAwesome name="times-circle-o" /> LOSS
              </Button>
            </Col>
            <Col sm="4" xs="12">
              <Button style={{marginBottom: '10px'}} 
                      color="warning" 
                      outline
                      onClick={() => this.setState({ outcome: 'T' })} 
                      outline={this.state.outcome === 'T' || this.state.outcome === '' ? false : true} 
                      size="lg" 
                      block>
                <FontAwesome name="balance-scale" /> TIE
              </Button>
            </Col>
          </Row>
          <Row className="section">
            <Col sm="6" xs="12">
              <FormGroup>
                <Label for="game-mode">Game Mode</Label>
                <Input type="select" name="game-mode" onChange={this.onModeChange} value="snd">
                  <option value="cm">Cage Match</option>
                  <option value="dom">Domination</option>
                  <option value="ffa">Free for all</option>
                  <option value="gw">Ground War</option>
                  <option value="hq">Headquarters</option>
                  <option value="mtdm">Mercenary Team Deathmatch</option>
                  <option value="sab">Sabotage</option>
                  <option value="hp">Hardpoint</option>
                  <option value="snd">Search and Destroy</option>
                  <option value="tdm">Team Deathmatch</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="6" xs="12">
              <FormGroup>
                <Label for="map">Map</Label>
                <Input type="select" name="map" onChange={this.onMapChange} value="vacant">
                  <option value="ambush">Ambush</option>
                  <option value="backlot">Backlot</option>
                  <option value="bloc">Bloc</option>
                  <option value="bog">Bog</option>
                  <option value="countdown">Countdown</option>
                  <option value="crash">Crash</option>
                  <option value="crossfire">Crossfire</option>
                  <option value="district">District</option>
                  <option value="downpour">Downpour</option>
                  <option value="overgrown">Overgrown</option>
                  <option value="pipeline">Pipeline</option>
                  <option value="shipment">Shipment</option>
                  <option value="showdown">Showdown</option>
                  <option value="strike">Strike</option>
                  <option value="vacant">Vacant</option>
                  <option value="wetwork">Wet Work</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row className="section">
            <Col md="3" xs="6">
              <FormGroup>
                <Label for="kills">Kills</Label>
                <Input type="number" 
                       name="kills" 
                       value={this.state.kills} 
                       onChange={(e) => this.setState({ kills: e.target.value })} 
                       min={0} 
                       required/>
              </FormGroup>
            </Col>
            <Col md="3" xs="6">
              <FormGroup>
                <Label for="deaths">Deaths</Label>
                <Input type="number" 
                       name="deaths" 
                       value={this.state.deaths} 
                       onChange={(e) => this.setState({ deaths: e.target.value })} 
                       min={0} 
                       required/>
              </FormGroup>
            </Col>
            <Col md="3" xs="6">
              <FormGroup>
                <Label for="assists">Assists</Label>
                <Input type="number" 
                       name="assists" 
                       value={this.state.assists} 
                       onChange={(e) => this.setState({ assists: e.target.value })} 
                       min={0}/>
              </FormGroup>
            </Col>
            <Col md="3" xs="6">
              <FormGroup>
                <Label for="kd">K/D Ratio</Label>
                <Input type="number" name="kd" placeholder={this.getKDRatio()} disabled/>
              </FormGroup>
            </Col>
          </Row>
          <Row className="section">
            <Col sm="4" xs="12">
              <FormGroup>
                <Label for="round-wins">Round Wins</Label>
                <Input type="number"
                       min={0}
                       value={this.state.roundWins} 
                       onChange={(e) => this.setState({ roundWins: e.target.value })}  
                       name="round-wins"/>
              </FormGroup>
            </Col>
            <Col sm="4" xs="12">
              <FormGroup>
                <Label for="round-losses">Round Losses</Label>
                <Input type="number"
                       min={0}
                       value={this.state.roundLosses} 
                       onChange={(e) => this.setState({ roundLosses: e.target.value })}  
                       name="round-losses"/>
              </FormGroup>
            </Col>
            <Col sm="4" xs="12">
              <FormGroup>
                <Label for="round-wl-ratio">Round W/L Ratio</Label>
                <Input type="number" name="round-wl-ratio" placeholder={this.getWinLossRatio()} disabled/>
              </FormGroup>
            </Col>
          </Row>
          <Row className="section">
            <Col sm="6">
            <Label for="date">Date</Label>
              <SingleDatePicker
                id="date"
                required 
                withPortal={true}
                isOutsideRange={() => false}
                numberOfMonths={1}
                date={this.state.date}
                focused={this.state.focused}
                onDateChange={(date) => { this.setState({ date }); }}
                onFocusChange={({ focused }) => { this.setState({ focused }); }}
              />
            </Col>
          </Row>
          <Row style={{marginTop: '30px', marginBottom: '30px'}}>
            <Col>
              <Button color="primary" style={{marginRight: '20px'}} onClick={this.submitMatch} >ADD MATCH</Button>
              <Button color="primary" outline onClick={this.reset}>RESET</Button>
            </Col>
          </Row>
      </Container>
    );
  }
}