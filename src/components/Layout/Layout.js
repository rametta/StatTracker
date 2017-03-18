import React, { Component } from 'react';
import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './Layout.css';

import { firebaseAuth, provider } from './../../config/constants'

export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = { 
      isOpen: false,
      user: null
    };

    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        console.log(user);
      } else {
        console.error('onAuthStateChange');
      }
    });

    firebaseAuth().getRedirectResult()
      .then((result) => {
        if (result.credential) {
          // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
          // You can use these server side with your app's credentials to access the Twitter API.
          // var token = result.credential.accessToken;
          // var secret = result.credential.secret;
        }
        // var user = result.user;
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
        
        console.error(error);
      });
  }

  componentDidMount() {
    //console.log(firebaseAuth().currentUser);
  }

  logout() {
    firebaseAuth().signOut();
    console.log(firebaseAuth().currentUser);
  }

  login() {
    if (!firebaseAuth().currentUser) {
      console.log(firebaseAuth().currentUser);
      firebaseAuth().signInWithRedirect(provider);
    } else {
      console.log(firebaseAuth().currentUser);
      console.log('Already signed in');
    }
    
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

              <NavItem>
                <Link onClick={this.toggle} to="/match/new" className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
									New Match
								</Link>
              </NavItem>

              <NavItem>
                <Link onClick={this.toggle} to="/profile/rametta" className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
									My Stats
								</Link>
              </NavItem>

              <NavItem>
                <Link onClick={this.toggle} to="/account" className="nav-link" activeStyle={{ color: '#4a4a4a' }}>
									Account
								</Link>
              </NavItem>

              <NavItem>

              {
                this.state.user
                ?
                <Button color="primary" outline onClick={this.logout}>Logout <FontAwesome name="twitter" /></Button>
                :
                <Button color="primary" onClick={this.login}>Login <FontAwesome name="twitter" /></Button>
              }
                

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