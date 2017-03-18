import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Container, Button } from 'reactstrap';
import './Home.css';

export const Home = props => (
  <Container className="home-container text-center" style={{marginTop: '30%'}}>
    <Button color="primary"><FontAwesome name="twitter" /> Sign in with Twitter</Button>
  </Container>
);