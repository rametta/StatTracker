import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button, UncontrolledAlert } from 'reactstrap';
import { MapSelect } from './../../components/MapSelect/MapSelect';
import { ModeSelect } from './../../components/ModeSelect/ModeSelect'; 
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
    
    if(!firebaseAuth().currentUser) {
      this.error();
      return;
    }

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
      .then(() => { 
        this.setState({
          alertType: 'success',
          alertVisible: true,
          errorCode: 'Congrats mate!',
          errorMessage: `Your new match has been saved successfully.`
        }) 
      })
      .catch(err => this.error())
  }

  error() {
    this.setState({
      alertType: 'danger',
      alertVisible: true,
      errorCode: 'Uh Oh!',
      errorMessage: `Something went wrong... We have our best monkey's working on the job!`
    })
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
                <ModeSelect OnSelect={mode => this.setState({ mode })} mode={this.state.mode}/>
              </FormGroup>
            </Col>
            <Col sm="6" xs="12">
              <FormGroup>
                <Label for="map">Map</Label>
                <MapSelect OnSelect={map => this.setState({ map })} map={this.state.map}/>
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
          {
            this.state.alertVisible
            ?
            <Row style={{marginTop: '30px'}}>
              <Col xs="12">
                <UncontrolledAlert color={this.state.alertType}>
                  <strong>{this.state.errorCode}</strong> {this.state.errorMessage}
                </UncontrolledAlert>
              </Col>
            </Row>
            :
            null
          }
          <Row style={{marginTop: '20px', marginBottom: '30px'}}>
            <Col>
              <Button color="primary" style={{marginRight: '20px'}} onClick={this.submitMatch} >ADD MATCH</Button>
              <Button color="primary" outline onClick={this.reset}>RESET</Button>
            </Col>
          </Row>
      </Container>
    );
  }
}