import firebase from 'firebase/app';
import apiKeys from './javascripts/helpers/data/apiKeys.json';

import 'bootstrap';
import authData from './helpers/data/authData';
import navlogo from './components/home/home';
import auth from './components/auth/auth';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navlogo.myNavBar();
  authData.checkLoginStatus();
  auth.loginButton();
};

init();
