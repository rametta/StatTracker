import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col, FormGroup, Input } from 'reactstrap';
// import StatChart from './../../components/StatChart/StatChart';
import { PlayerTable } from './../../components/PlayerTable/PlayerTable';
import { firebaseAuth, db } from './../../config/constants';
import './Profile.css';

export default class Profile extends Component {

 constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
    this.state = { 
      activeTab: 'overall',
      map: 'vacant',
      mode: 'snd',
      user: null,
      matches: []
    }
  }

  componentDidMount() {
    this.fbListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });

    const { uid } = this.props.routeParams;
    
    if(uid) {
      db.ref(`/stats/${uid}/matches`).on('child_added', snap => {
        console.log(snap.val());
        this.setState({
          matches: [...this.state.matches, snap.val()]
        });
      })
    }

  }

  componentWillUnmount() {
    this.fbListener && this.fbListener();
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
                    <h4>{this.state.user ? <strong className="blue">{this.state.user.displayName}</strong> : null} Overall Statistics</h4>
                    <PlayerTable id="overall" matches={this.state.matches}/>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="perMap">
                <Row className="section">
                  <Col sm="12">

                    <Row>
                      <Col md="9">
                        <h4>{this.state.user ? <strong className="blue">{this.state.user.displayName}</strong> : null} Statistics By Map</h4>
                      </Col>
                      <Col md="3" xs="12">
                        <FormGroup style={{marginBottom: '10px'}}>
                          <Input type="select" name="map" onChange={ (ev) => this.setState({ map: ev.target.value }) } value={this.state.map}>
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

                    <PlayerTable id="map"/>

                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="perMode">
                <Row className="section">
                  <Col sm="12">

                    <Row>
                      <Col md="9">
                        <h4>{this.state.user ? <strong className="blue">{this.state.user.displayName}</strong> : null} Statistics By Mode</h4>
                      </Col>
                      <Col md="3" xs="12">
                        <FormGroup style={{marginBottom: '10px'}}>
                          <Input type="select" name="game-mode" onChange={ (ev) => this.setState({ mode: ev.target.value }) } value={this.state.mode}>
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
                    </Row>

                    <PlayerTable id="mode"/>
              
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