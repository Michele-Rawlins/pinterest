import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

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
  navlogo.logoutEvent();
  // $('body').on('mouseenter', '.pin-card', (e) => e.target.closest('.card').classList.add('bg-danger'));
  // $('body').on('mouseleave', '.pin-card', (e) => e.target.closest('.card').classList.remove('bg-danger'));
};

init();
