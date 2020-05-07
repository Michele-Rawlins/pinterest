import boardData from '../../helpers/data/boardData';
import boardComponent from '../board/board';
import singleBoard from '../singleboard/singleboard';
import utils from '../../helpers/utils';
import smashData from '../../helpers/data/smash';

const removeBoard = (e) => {
  const boardId = e.target.closest('.board-card').id;
  smashData.completelyRemoveBoard(boardId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildBoards();
      utils.printToDom('single-board', '');
    })
    .catch((err) => console.error('could not delete board', err));
};

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      // console.error('boards', boards);
      let domString = '';
      domString += '<h2 class="text-center">Boards</h2>';
      domString += '<div class="card-board d-flex flex-wrap">';
      domString += '<button><i class="fas fa-calendar-plus">Make New Board</i></button>';
      boards.forEach((board) => {
        domString += boardComponent.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('boards', domString);
      $('body').on('click', '.board-card', singleBoard.buildBoard);
      $('body').on('click', '.delete-board', removeBoard);
    })
    .catch((err) => console.error('problem with getBoards', err));
};

export default { buildBoards };
