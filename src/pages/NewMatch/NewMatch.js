import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './NewMatch.css';

export const NewMatch = props => (
  <Container>
    <h3 className="section">New Match</h3>
    <Form>
      <Row className="section">
        <Col sm="4" xs="12">
          <Button color="success" size="lg" block>
            <FontAwesome name="trophy" /> WIN
          </Button>
        </Col>
        <Col sm="4" xs="12">
          <Button color="danger" size="lg" block>
            <FontAwesome name="times-circle-o" /> LOSS
          </Button>
        </Col>
        <Col sm="4" xs="12">
          <Button color="warning" size="lg" block>
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
        <Col md="3" xs="12">
          <FormGroup>
            <Label for="kills">Kills</Label>
            <Input type="number" name="kills" placeholder="0" min="0" required/>
          </FormGroup>
        </Col>
        <Col md="3" xs="12">
          <FormGroup>
            <Label for="deaths">Deaths</Label>
            <Input type="number" name="deaths" placeholder="0" min="0" required/>
          </FormGroup>
        </Col>
        <Col md="3" xs="12">
          <FormGroup>
            <Label for="assists">Assists</Label>
            <Input type="number" name="assists" placeholder="0" min="0"/>
          </FormGroup>
        </Col>
        <Col md="3" xs="12">
          <FormGroup>
            <Label for="kd">K/D Ratio</Label>
            <Input type="number" name="kd" disabled/>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  </Container>
);