import firebase from 'firebase/app';
import 'firebase/auth';

import boardHome from '../../components/boardHome/boardsHome';
import boardPins from '../../components/boardPins/boardPins';


const authDiv = $('#auth');
const boardDiv = $('#boards');
const pinDiv = $('#pins');
const singleBoardDiv = $('#single-board');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      boardDiv.removeClass('hide');
      pinDiv.removeClass('hide');
      singleBoardDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      boardHome.buildBoards();
      boardPins.buildPins();
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      boardDiv.addClass('hide');
      pinDiv.addClass('hide');
      singleBoardDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
