import utils from '../../helpers/utils';
import pinData from '../../helpers/data/pinData';

const showForm = (pinId) => {
  pinData.getPins(pinId)
    .then((resp) => {
      const pin = resp.data;
      let domString = '';
      domString += '<h2 class="text-center">Edit Pin</h2>';
      domString += `<form class="col-10 offset-1 edit-pin-form-tag" id=${pinId}>`;
      domString += '<div class="form-group">';
      domString += '<label for="pin-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-pin-name" placeholder="Europe" value=${pin.name}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="pin-url">Url</label>';
      domString += `<input type="image" class="form-control" id="pin-url" placeholder="Your Url Here" value = ${pin.url}>`;
      domString += '</div>';
      domString += '<button type="submit" class="btn btn-dark" id="pin-creator">Edit PSin</button>';
      domString += '</form>';

      utils.printToDom('edit-pin', domString);
    })
    .catch((err) => console.error('could not get single pin', err));
};
export default { showForm };
