import React, { Component } from 'react';
import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './Layout.css';

export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <Link to="/" className="navbar-brand">COD STATS</Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <Link to="/match/new" className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
									New Match
								</Link>
              </NavItem>

              <NavItem>
                <Link to="/leaderboards" className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
									Leaderboards
								</Link>
              </NavItem>

              <NavItem>
                <Link to="/profile/rametta" className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
									My Stats
								</Link>
              </NavItem>

              <NavItem>
                <Link to="/account" className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
									Account
								</Link>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
        <div>
          {this.props.children}
        </div>
        <footer className="footer text-center">
          <Container>
            <span className="text-muted">Made with <FontAwesome name="heart red" /> By <a href="http://rametta.org" target="_blank">Jason</a></span>
          </Container>
        </footer>
      </div>
    );
  }
}