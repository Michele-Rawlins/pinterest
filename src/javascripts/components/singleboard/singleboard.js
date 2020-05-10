import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildBoard = (e) => {
  const boardId = e.target.closest('.board-card').id;
  smash.getSingleBoardWithPins(boardId)
    .then((singleBoard) => {
      console.error('singleboard', singleBoard);
      let domString = '';
      // add a collaspse form here
      // <!-- Button trigger modal -->
      // {/* Launch demo modal */}
      // {/* </button> */}
      domString += '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">';
      domString += '<div class="modal-dialog modal-dialog-centered" role="document">';
      domString += '<div class="modal-content">';
      domString += '<div class="modal-header">';
      domString += `<h4 class="modal-title" id="exampleModalLongTitle">${singleBoard.name}</h4>`;
      domString += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
      domString += '<span aria-hidden="true">&times;</span>';
      domString += '</button>';
      domString += '</div>';
      domString += '<div class="modal-body">';
      domString += '</div>';
      domString += '<div class="modal-footer">';
      domString += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close Board</button>';
      domString += '<button type="button" class="btn btn-primary">Back to Boards</button>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '<h2 class="text-center">Featured Board</h2>';
      domString += '<div class="col-6">';
      domString += '<div class="card text-white bg-dark">';
      domString += `<div class="card-header">Board ${singleBoard.name}</div>`;
      domString += '<div class="card-body">';
      domString += '<h3 class="card-title">My Pins</h3>';
      singleBoard.pins.forEach((pins) => {
        console.error('pin', pins);
        domString += `<p class="card-text">${pins.name}</p>`;
        domString += `<img src = "${pins.url}">`;
        domString += '<button class="btn btn-danger delete-pin"><i class="far fa-trash-alt"></i></button>';
      });
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('single-board', domString);
    })
    .catch((err) => console.error('problem with single board', err));
};

export default { buildBoard };
