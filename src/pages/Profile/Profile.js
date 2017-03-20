import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MapSelect } from './../../components/MapSelect/MapSelect';
import { ModeSelect } from './../../components/ModeSelect/ModeSelect'; 
//import { PieChart } from './../../components/PieChart/PieChart';
import PlayerTable from './../../components/PlayerTable/PlayerTable';
import { db } from './../../config/constants';
import './Profile.css';

export default class Profile extends Component {

  state = { 
    map: '',
    mode: '',
    user: null,
    matches: []
  }

  componentDidMount() {

    const { uid } = this.props.routeParams;
    
    if(uid) {
      this.ref = db.ref(`/stats/${uid}/matches`);
      this.ref.on('child_added', snap => {
        this.setState({
          matches: [...this.state.matches, snap.val()]
        });
      })

      this.ref2 = db.ref(`/stats/${uid}/user`);
      this.ref2.on('value', snap => {
        this.setState({
          user: snap.val()
        });
      })
    }
  }

  componentWillUnmount() {
    this.ref.off();
    this.ref2.off();
  }

  render() {
    return (
      <Container className="section">

        <Row>

          <Col sm="6" xs="12" className="section profile-header">
            <img alt="" src={this.state.user ? this.state.user.photo : null} className="player-thumb"/>
            <h2>{this.state.user ? <span className="blue">{this.state.user.gamertag}</span> : null}</h2>
          </Col>

          <Col sm="3" xs="6" className="section">
            <MapSelect OnSelect={map => this.setState({ map })} map={this.state.map}/>
          </Col>

          <Col sm="3" xs="6" className="section">
            <ModeSelect OnSelect={mode => this.setState({ mode })} mode={this.state.mode}/>
          </Col>

        </Row>

        {
          /*
          <Row className="section">
            <Col md="3" xs="6">
              <PieChart data={[]}/>
            </Col>
          </Row>
          */
        }

        <Row className="section">

          <Col xs="12">
            <PlayerTable id="overall" 
                         matches={this.state.matches} 
                         mapFilter={this.state.map} 
                         modeFilter={this.state.mode}/>
          </Col>

        </Row>

      </Container>
    );
  }

}