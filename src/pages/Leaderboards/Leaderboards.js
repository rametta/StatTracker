import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col, FormGroup } from 'reactstrap';
import { LeaderTable } from './../../components/LeaderTable/LeaderTable';
import { MapSelect } from './../../components/MapSelect/MapSelect';
import { ModeSelect } from './../../components/ModeSelect/ModeSelect'; 

import './Leaderboards.css';

export default class Leaderboards extends Component {

  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
    this.state = { 
      activeTab: 'overall',
      map: 'vacant',
      mode: 'snd'
    };
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
                    <h4>Overall Statistics</h4>
                    <LeaderTable id="overall"/>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="perMap">
                <Row className="section">
                  <Col sm="12">

                    <Row>
                      <Col md="9">
                        <h4>Statistics By Map</h4>
                      </Col>
                      <Col md="3" xs="12">
                        <FormGroup style={{marginBottom: '10px'}}>
                          <MapSelect OnSelect={map => this.setState({ map })} map={this.state.map}/>
                        </FormGroup>
                      </Col>
                    </Row>

                    <LeaderTable id="map" />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="perMode">
                <Row className="section">
                  <Col sm="12">

                    <Row>
                      <Col md="9">
                        <h4>Statistics By Mode</h4>
                      </Col>
                      <Col md="3" xs="12">
                        <FormGroup style={{marginBottom: '10px'}}>
                          <ModeSelect OnSelect={mode => this.setState({ mode })} mode={this.state.mode}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <LeaderTable id="mode"/>
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