import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildBoard = (e) => {
  const boardId = e.target.closest('.board-card').id;
  smash.getSingleBoardWithPins(boardId)
    .then((singleBoard) => {
      console.error('singleboard', singleBoard);
      let domString = '';
      // add a collaspse form here
      domString += '<h2 class="text-center">Featured Board</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-dark">';
      domString += `<div class="card-header">Board ${singleBoard.name}</div>`;
      domString += '<div class="card-body">';
      domString += '<h3 class="card-title">Pin(s) Owned:</h3>';
      singleBoard.pins.forEach((pin) => {
        console.error('pin', pin);
        domString += `<p class="card-text">${pin.name} (${pin.url})</p>`;
      });
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('single-board', domString);
    })
    .catch((err) => console.error('problem with single board', err));
};

export default { buildBoard };
