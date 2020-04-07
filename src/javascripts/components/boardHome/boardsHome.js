import boardData from '../../helpers/data/boardData';
import boardComponent from '../board/board';
import singleBoard from '../singleboard/singleboard';
import utils from '../../helpers/utils';

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      console.error('boards', boards);
      let domString = '';
      domString += '<h1 class="text-center">Boards</h1>';
      domString += '<div class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardComponent.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('boards', domString);
      $('body').on('click', '.board-card', singleBoard.buildBoard);
    })
    .catch((err) => console.error('problem with getBoards', err));
};

export default { buildBoards };
