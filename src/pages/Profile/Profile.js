import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col, FormGroup, Input } from 'reactstrap';
import { PlayerTable } from './../../components/PlayerTable/PlayerTable';
import './Profile.css';

export default class Profile extends Component {

 constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
    this.state = { activeTab: 'overall' };
  }

  toggleTab(activeTab) {
    if (this.state.activeTab !== activeTab) {
      this.setState({ activeTab });
    }
  }

  render() {
    return (
      <Container className="section">
        <Row>
          <Col xs="12">

            <Nav tabs>
              <NavItem>
                <NavLink onClick={() => this.toggleTab('overall')}
                         className={this.state.activeTab === 'overall' ? 'active' : ''}>Overall</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.toggleTab('perMode')}
                         className={this.state.activeTab === 'perMode' ? 'active' : ''}>Per Mode</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.toggleTab('perMap')}
                         className={this.state.activeTab === 'perMap' ? 'active' : ''}>Per Map</NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="overall">
                <Row className="section">
                  <Col sm="12">
                    <h4>NAME's Overall Statistics</h4>
                    <PlayerTable />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="perMap">
                <Row className="section">
                  <Col sm="12">

                    <Row>
                      <Col md="9">
                        <h4>NAME's Statistics By Map</h4>
                      </Col>
                      <Col md="3" xs="12">
                        <FormGroup style={{marginBottom: 0}}>
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

                    <PlayerTable />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="perMode">
                <Row className="section">
                  <Col sm="12">

                    <Row>
                      <Col md="9">
                        <h4>NAME's Statistics By Mode</h4>
                      </Col>
                      <Col md="3" xs="12">
                        <FormGroup style={{marginBottom: 0}}>
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
                    </Row>
                    
                    <PlayerTable />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>

          </Col>
        </Row>
      </Container>
    );
  }

}