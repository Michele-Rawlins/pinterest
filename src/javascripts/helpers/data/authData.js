import firebase from 'firebase/app';
import 'firebase/auth';


const authDiv = $('#auth');
const boardDiv = $('#boards');
const pinDiv = $('#pins');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      boardDiv.removeClass('hide');
      pinDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      boardDiv.addClass('hide');
      pinDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
