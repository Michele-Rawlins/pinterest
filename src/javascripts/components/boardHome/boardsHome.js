import boardData from '../../helpers/data/boardData';
import boardComponent from '../board/board';
import singleBoard from '../singleboard/singleboard';
import utils from '../../helpers/utils';

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = '';
      domString += '<h2 class="text-center">boardhouse</h2>';
      domString += '<div class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardComponent.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('farmhouse', domString);
      $('body').on('click', '.board-card', singleBoard.buildBoard);
    })
    .catch((err) => console.error('problem with getBoards', err));
};

export default { buildBoards };
