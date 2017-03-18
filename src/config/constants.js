import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyA5qbyeV6hS0Qim4XcFsBFrx53daDSiGPY",
  databaseURL: "https://stattracker-1d36d.firebaseio.com/",
  authDomain: "stattracker-1d36d.firebaseapp.com",
}

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const db = firebase.database();
export const firebaseAuth = firebase.auth;
export const provider = new firebase.auth.TwitterAuthProvider();