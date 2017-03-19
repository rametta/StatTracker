import React, { Component } from 'react';
import { Container, FormGroup, Label, Input, Col, Row, Button, UncontrolledAlert } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { firebaseAuth } from './../../config/constants';

export default class Signup extends Component {

  constructor(props) {
    super(props);

    this.signup = this.signup.bind(this);

    this.state = {
      email: '',
      password: '',
      alertVisible: false,
      errorCode: '',
      errorMessage: ''
    }
  }

  signup() {
    if(!this.state.email || !this.state.password) {
      this.error('Uh Oh!', 'You best fill in all the fields yo...');
      return;
    }

    firebaseAuth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => this.props.router.push('/'))
      .catch((error) => this.error(error.code, error.message));
  }

  error(code, message) {
    this.setState({
      alertVisible: true,
      errorCode: code,
      errorMessage: message
    });
  }

  render() {
    return (
      <Container className="section">

      {
        this.state.alertVisible
        ?
        <UncontrolledAlert color="danger">
            <strong>{this.state.errorCode}</strong> {this.state.errorMessage}
        </UncontrolledAlert>
        :
        null
      }
        
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" required onChange={e => this.setState({email: e.target.value})} value={this.state.username}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" required onChange={e => this.setState({password: e.target.value})} value={this.state.password}></Input>
            </FormGroup>
            <FormGroup>
              <Button color="primary" onClick={this.signup}>Signup <FontAwesome name="angle-right"/></Button>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }

}