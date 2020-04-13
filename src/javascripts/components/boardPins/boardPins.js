// import pins from '../pins/pins';
import pinData from '../../helpers/data/pinData';
import smashData from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pins';

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

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2 class="text-center">Home</h2>';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('pins', domString);
      $('body').on('click', '.delete-pin', removePin);
    })
    .catch((err) => console.error('get pins broke', err));
};

export default { buildPins, removePin };
