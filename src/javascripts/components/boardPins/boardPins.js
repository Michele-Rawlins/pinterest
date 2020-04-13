// import pins from '../pins/pins';
import pinData from '../../helpers/data/pinData';
import smashData from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pins';
import newPinComponent from '../newPins/newPins';

const removePin = (e) => {
  const pinId = e.target.closest('.pin-card').id;
  smashData.completelyRemovePin(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildPins();
      utils.printToDom('pins', '');
    })
    .catch((err) => console.error('could not delete pin', err));
};

// const buildPins = () => {
// smashData.getPinsWithOwners()
// .then((pins) => {
// let domString = '';
// domString += '<h2 class="text-center">Board</h2>';
// domString += '<button class="btn btn-success" id="show-add-cow-form"><i class="fas fa-plus"></i></button>';
// domString += '<div class="d-flex flex-wrap">';
// pins.forEach(() => {
// domString += pinComponent.pinMaker(pin);
// });
// domString += '</div>';
// utils.printToDom('pasture', domString);
// $('#show-add-cow-form').click(newCowComponent.showForm);
// })
// .catch((err) => console.error('get cows broke', err));
// };

// const pastureEvents = () => {
// $('body').on('click', '.delete-cow', removeCow);
// $('body').on('click', '.edit-cow', editCowEvent);
// $('body').on('click', '#cow-creator', makeACow);
// $('body').on('click', '#cow-modifier', modifyCow);
// $('body').on('click', '.farmer-cow-checkbox', farmerCowController);
// };

// export default { buildCows, pastureEvents };

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2 class="text-center">Home</h2>';
      domString += '<button class="btn btn-success" id="show-add-pin-form"><i class="fas fa-plus"></i></button>';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('pins', domString);
      $('body').on('click', '.delete-pin', removePin);
      $('#show-add-pin-form').click(newPinComponent.showForm);
    })
    .catch((err) => console.error('get pins broke', err));
};

export default { buildPins, removePin };
