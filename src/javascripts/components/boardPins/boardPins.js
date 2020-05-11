// import pins from '../pins/pins';
import pinData from '../../helpers/data/pinData';
import smashData from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pins';
import newPinForm from '../newPin/newPin';
import editPinModal from '../editPins/editPins';


const removePin = (e) => {
  const pinId = e.target.closest('.pin-card').id;
  smashData.completelyRemovePin(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildPins();
      utils.printToDom('pins', '');
    })
    .catch((err) => console.error('could not delete board', err));
};

const makeNewPin = (e) => {
  e.preventDefault();
  // const newBoardPin = e.target.closest('.pin-form');
  const newPin = {
    // newBoardPin: newBoardPin.id,
    Url: $('#pin-imageUrl').val(),
    name: $('#pinName').val(),
  };
  pinData.addPinData(newPin)
    .then(() => {
      $('#modalBodyAddPin input').val('');
      $('#modalAddPin').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildPins();
      // utils.printToDom('new-pin', '');
    })
    .catch((err) => console.error('could not add Data', err));
};
const editPin = (e) => {
  e.preventDefault();
  const pinId = e.target.closest('.pin-card').id;
  $('#modalEditPin').modal('show');
  editPinModal.editPinForm(pinId);
};

// const updatePin = () => {
//   const pinId = $('.edit-pin-form-tag').data('id');
//   const boardid = $('.pin-card').data('board-id');
//   const title = $('.pinDiv').attr('id');
//   const editedPin = {
//     boardid,
//     credit: $('#edit-pin-credit').val(),
//     description: $('#edit-pin-desc').val(),
//     imageUrl: $('#edit-pin-imgUrl').val(),
//     pinTitle: $('#edit-pin-pinTitle').val(),
//     title,
//   };
//   pinData.updatePin(pinId, editedPin)
//     .then(() => {
//       $('#modalEditPin').modal('hide');
//       // eslint-disable-next-line no-use-before-define
//       viewSingleBoard(boardid);
//     })
//     .catch((error) => console.error('could not update the pin', error));
// };
const pinEvents = () => {
  $('body').on('click', '#button-save-pin', makeNewPin);
  $('body').on('click', '.edit-pin-button', editPin);
  // $('body').on('click', '#button-save-edit-pin', updatePin);
  $('body').on('click', '.add-New-Pin', newPinForm.showAddPinForm);
};


const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2 class="text-center">Home</h2>';
      domString += '<button class="add-New-Pin"><i class="fas fa-map-pin">Add Pin</i></button>';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('pins', domString);
      // $('body').on('click', '.add-New-Pin', makeNewPin);
      $('body').on('click', '.delete-pin', removePin);
    })
    .catch((err) => console.error('get pins broke', err));
};

export default { buildPins, removePin, pinEvents };
