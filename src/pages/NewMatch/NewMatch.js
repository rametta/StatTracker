import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import './NewMatch.css';

export const NewMatch = props => (
  <Container>
  <h3>New Match</h3>
    <Row>
      <Col sm="6" xs="12">
        <Form>
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
        </Form>
      </Col>
      <Col sm="6" xs="12">
        <Form>
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
        </Form>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form>
          <FormGroup>
            <Label for="kills">Kills</Label>
            <Input type="text" name="kills" placeholder="0" />
          </FormGroup>
        </Form>
      </Col>
    </Row>
  </Container>
);