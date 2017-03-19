import React, { Component } from 'react';
import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './Layout.css';

import { firebaseAuth } from './../../config/constants'

export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.twitterLogin = this.twitterLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.state = { 
      isOpen: false,
      user: null
    };
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        //this.props.router.push('/');
      }
    });
  }

  logout() {
    this.toggle();
    firebaseAuth().signOut()
      .then(res => {
        this.setState({ user: null });
        this.props.router.push('/');
      })
      .catch(err => console.error(err));
  }

  twitterLogin() {
    const provider = new firebaseAuth.TwitterAuthProvider();
    firebaseAuth().signInWithRedirect(provider);
  }

  toggle() {
    // between 575px and 576px is when toggle appears for mobile
    const width = window.innerWidth;
    if(width < 576) this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <Link to="/" className="navbar-brand">COD STATS</Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {
              this.state.user ?
                <NavItem>
                  <Link onClick={this.toggle} to="/match/new" className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
                    New Match
                  </Link>
                </NavItem>
              : null
            }
            
            {
              this.state.user ?
                <NavItem>
                  <Link onClick={this.toggle} to={`/profile/${this.state.user.uid}`} className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
                    My Stats
                  </Link>
                </NavItem>
              : null
            }

            {
              this.state.user ?
                <NavItem>
                  <Link onClick={this.toggle} to="/account" className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
                    Account
                  </Link>
                </NavItem>
              :
              null
            }

            {
              this.state.user ?
                <NavItem>
                  <Button color="primary" outline onClick={this.logout}>Logout</Button>
                </NavItem>
              :
                <NavItem>
                  <Button color="primary" onClick={this.twitterLogin}><FontAwesome name="twitter" /> Login</Button>
                </NavItem>
            }
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