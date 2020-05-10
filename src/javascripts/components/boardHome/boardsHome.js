import firebase from 'firebase/app';
import 'firebase/auth';

import boardData from '../../helpers/data/boardData';
import boardComponent from '../board/board';
import singleBoard from '../singleboard/singleboard';
import utils from '../../helpers/utils';
import smashData from '../../helpers/data/smash';
import newBoardForm from '../newBoard/newBoard';

const removeBoard = (e) => {
  const boardId = e.target.closest('.board-card').id;
  smashData.completelyRemoveBoard(boardId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildBoards();
      // utils.printToDom('single-board', '');
    })
    .catch((err) => console.error('could not delete board', err));
};

const makeBoard = (e) => {
  e.preventDefault();
  const myUid = firebase.auth().currentUser.uid;
  const newBoard = {
    url: $('#board-imageUrl').val(),
    name: $('#board-name').val(),
    uid: myUid,
  };
  boardData.addBoard(newBoard)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      $('#modalBodyAddBoard input').val('');
      $('#modalAddBoard').modal('hide');
      // $('#modalAddBoard').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildBoards();
    })
    .catch((err) => console.error('could not add a board', err));
};

const boardEvents = () => {
  $('body').on('click', '#button-save-board', makeBoard);
  $('body').on('click', '.make-new-board', newBoardForm.buildBoardForm);
};

const buildBoards = () => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoardsByUid(myUid)
    .then((boards) => {
      console.error('boards', boards);
      let domString = '';
      domString += '<h2 class="text-center">Boards</h2>';
      domString += '<div class="card-board d-flex flex-wrap">';
      domString += '<button class="make-new-board"><i class="fas fa-calendar-plus">Make New Board</i></button>';
      boards.forEach((board) => {
        domString += boardComponent.boardMaker(board);
      });
      // domString += newBoardForm.buildBoardForm();
      domString += '</div>';
      utils.printToDom('boards', domString);
      $('body').on('click', '.board-card', singleBoard.buildBoard);
      $('body').on('click', '.delete-board', removeBoard);
      // $('body').on('click', '.make-new-board', newBoardForm.buildBoardForm);
      // $('.button-create-board').click(makeBoard);
    })
    .catch((err) => console.error('problem with getBoards', err));
};

export default { buildBoards, boardEvents };
