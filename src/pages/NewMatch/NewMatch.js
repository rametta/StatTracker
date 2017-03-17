import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';
import './NewMatch.css';

export default class NewMatch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      outcome: '',
      mode: '',
      map: '',
      kills: '',
      deaths: '',
      assists: '',
      roundWins: '',
      roundLosses:'',
      date: moment()
    }

    this.reset = this.reset.bind(this);
    this.getWinLossRatio = this.getWinLossRatio.bind(this);
  }

  reset() {
    this.setState({
      outcome: '',
      mode: '',
      map: '',
      kills: '',
      deaths: '',
      assists: '',
      roundWins: 0,
      roundLosses: 0,
      date: moment()
    });
  }

  getWinLossRatio() {
    const { roundWins, roundLosses } = this.state;
    if( roundWins !== 0 && 
        roundWins !== '' && 
        roundLosses !== 0 && 
        roundLosses !== '') {
      return (this.state.roundWins / this.state.roundLosses).toFixed(2);
    }
    return 0;
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
                      outline={this.state.outcome === 'win' || this.state.outcome === '' ? false : true} 
                      onClick={() => this.setState({ outcome: 'win' })} >
                <FontAwesome name="trophy" /> WIN
              </Button>
            </Col>
            <Col sm="4" xs="12">
              <Button style={{marginBottom: '10px'}} 
                      color="danger" 
                      onClick={() => this.setState({ outcome: 'danger' })} 
                      outline={this.state.outcome === 'danger' || this.state.outcome === '' ? false : true} 
                      size="lg" 
                      block>
                <FontAwesome name="times-circle-o" /> LOSS
              </Button>
            </Col>
            <Col sm="4" xs="12">
              <Button style={{marginBottom: '10px'}} 
                      color="warning" 
                      outline
                      onClick={() => this.setState({ outcome: 'warning' })} 
                      outline={this.state.outcome === 'warning' || this.state.outcome === '' ? false : true} 
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
                <Input type="select" name="game-mode">
                  <option>Cage Match</option>
                  <option>Domination</option>
                  <option>Free for all</option>
                  <option>Ground War</option>
                  <option>Headquarters</option>
                  <option>Mercenary Team Deathmatch</option>
                  <option>Sabotage</option>
                  <option>Hardpoint</option>
                  <option>Search and Destroy</option>
                  <option>Team Deathmatch</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="6" xs="12">
              <FormGroup>
                <Label for="map">Map</Label>
                <Input type="select" name="map">
                  <option>Ambush</option>
                  <option>Backlot</option>
                  <option>Bloc</option>
                  <option>Bog</option>
                  <option>Countdown</option>
                  <option>Crash</option>
                  <option>Crossfire</option>
                  <option>District</option>
                  <option>Downpour</option>
                  <option>Overgrown</option>
                  <option>Pipeline</option>
                  <option>Shipment</option>
                  <option>Showdown</option>
                  <option>Strike</option>
                  <option>Vacant</option>
                  <option>Wet Work</option>
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
                       min="0" 
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
                       min="0" 
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
                       min="0"/>
              </FormGroup>
            </Col>
            <Col md="3" xs="6">
              <FormGroup>
                <Label for="kd">K/D Ratio</Label>
                <Input type="number" name="kd" disabled/>
              </FormGroup>
            </Col>
          </Row>
          <Row className="section">
            <Col sm="4" xs="12">
              <FormGroup>
                <Label for="round-wins">Round Wins</Label>
                <Input type="number" 
                       value={this.state.roundWins} 
                       onChange={(e) => this.setState({ roundWins: e.target.value })}  
                       name="round-wins"/>
              </FormGroup>
            </Col>
            <Col sm="4" xs="12">
              <FormGroup>
                <Label for="round-losses">Round Losses</Label>
                <Input type="number" 
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
              <Button color="primary" size="lg" style={{marginRight: '20px'}} >ADD MATCH</Button>
              <Button color="primary" outline size="lg" onClick={this.reset}>RESET</Button>
            </Col>
          </Row>
      </Container>
    );
  }
}