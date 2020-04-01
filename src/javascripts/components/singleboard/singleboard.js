import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  smash.getSingleBoardrWithPins(boardId)
    .then((singleBoard) => {
      let domString = '';
      domString += '<h2 class="text-center">Featured Farmer</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-dark">';
      domString += `<div class="card-header">Farmer ${singleBoard.name} (Age: ${singleBoard.age})</div>`;
      domString += '<div class="card-body">';
      domString += '<h3 class="card-title">Cow(s) Owned:</h3>';
      singleBoard.pins.forEach((pin) => {
        domString += `<p class="card-text">${pin.name} (${pin.url})</p>`;
      });
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('single-board', domString);
    })
    .catch((err) => console.error('problem with single board', err));
};

export default { buildBoard };
