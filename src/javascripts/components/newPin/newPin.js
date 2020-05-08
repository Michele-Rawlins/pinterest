import utils from '../../helpers/utils';

const pinForm = () => {
  let domString = '';
  domString += '<h2 class="text-center">New Pin</h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<label for="pin-name">Name</label>';
  domString += '<input type="text" class="form-control" id="pin-name" placeholder="Outfit">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="pin-Url">Photo</label>';
  domString += '<input type="text" class="form-control" id="pin-photo" placeholder="Photo Here">';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-dark" id="cow-creator">Add Cow</button>';
  domString += '</form>';

  utils.printToDom('new-pin', domString);
};

export default { pinForm };
