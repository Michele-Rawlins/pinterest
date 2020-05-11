import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const editPinForm = (pinId) => {
  pinData.getPinById(pinId)
    .then((response) => {
      const selectedPin = response.data;
      let domString = '';
      domString += `<form id="modalForm" class="edit-pin-form-tag" data-id="${pinId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-pin-pinTitle">Pin Name</label>';
      domString += `<input type="text" class="form-control" id="edit-pin-name" aria-describedby="pin-name" placeholder="Enter Pin Name" value="${selectedPin.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-pin-image">Image</label>';
      domString += `<input type="text" class="form-control" id="edit-pin-image" aria-describedby="desc" placeholder="Enter Image" value="${selectedPin.url}">`;
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('modalBodyEditPin', domString);
    })
    .catch((error) => console.error('could not edit the selected pin', error));
};

export default { editPinForm };
