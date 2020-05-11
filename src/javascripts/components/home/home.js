
import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';


const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const myNavBar = () => {
  let domString = '';
  domString += '<h1 class="center">PINTEREST</h1>';
  utils.printToDom('home', domString);
};

export default { myNavBar, logoutEvent };
