import React, { Component } from 'react';
import { Container, Row, Col, Input, FormGroup, Label, Button, UncontrolledAlert } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { firebaseAuth, db } from './../../config/constants';

export default class Account extends Component {

  constructor(props) {
    super(props);

    this.updateUser = this.updateUser.bind(this);
    this.state = {
      alertVisible: false,
      alertType: '',
      gamertag: '',
      photo: '',
      errorCode: '',
      errorMessage: '',
      user: null
    }

  }

  componentDidMount() {
    this.fbListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.ref = db.ref(`/stats/${user.uid}/user`);
        this.ref.on('value', snap => {
          this.setState({
            user,
            photo: user.photoURL,
            gamertag: snap.val().gamertag 
          });
        })
      }
    });

  }

  componentWillUnmount() {
    this.ref.off();
    this.fbListener();
  }

  updateUser() {
    const update = {
      displayName: this.state.gamertag,
      photoURL: this.state.photo
    }

    this.ref.set({ 
      gamertag: this.state.gamertag,
      photo: this.state.photo
    });

    this.state.user.updateProfile(update)
      .then(() => { 
        this.setState({
          alertType: 'success',
          alertVisible: true,
          errorCode: 'Woohoo!',
          errorMessage: `Your changes have been changed successfully`
        }) 
      })
      .catch(err => {
        this.setState({
          alertType: 'danger',
          alertVisible: true,
          errorCode: 'Uh Oh!',
          errorMessage: `Something went wrong... We have our best monkey's on the job!`
        })
      })
  }
  
  render() {
    return(
      <Container className="section">
       
        <Row>
          <Col md={{size: 6, offset: 3}}>
            {
              this.state.alertVisible
              ?
              <UncontrolledAlert color={this.state.alertType}>
                  <strong>{this.state.errorCode}</strong> {this.state.errorMessage}
              </UncontrolledAlert>
              :
              null
            }
            <FormGroup>
              <Label for="gamer-tag"><FontAwesome name="gamepad"/> Gamertag</Label>
              <Input type="text" name="gamer-tag" id="gamer-tag" value={this.state.user ? this.state.gamertag : ''} onChange={e => this.setState({ gamertag: e.target.value })} placeholder="Gamertag..." />
            </FormGroup>
            <FormGroup>
              <Label for="photo"><FontAwesome name="image"/> Photo URL</Label>
              <Input type="text" name="photo" id="photo" value={this.state.user ? this.state.photo : ''} onChange={e => this.setState({ photo: e.target.value })} placeholder="Photo URL..." />
            </FormGroup>
            {
              this.state.user ?
              <FormGroup>
                <Button color="primary" onClick={this.updateUser}>Update</Button>
              </FormGroup>
              : null
            }
          </Col>
        </Row>
      </Container>
    );
  }
} 