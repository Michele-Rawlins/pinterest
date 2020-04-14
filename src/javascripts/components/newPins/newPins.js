import utils from '../../helpers/utils';

const showForm = () => {
  let domString = '';
  domString += '<h2 class="text-center">New Pin</h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<label for="pin-name">Name</label>';
  domString += '<input type="text" class="form-control" id="pin-name" placeholder="Europe">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="pin-url">Url</label>';
  domString += '<input type="image" class="form-control" id="pin-url" placeholder="Your Url Here">';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-dark" id="pin-creator">Add Pin</button>';
  domString += '</form>';

  utils.printToDom('new-pin', domString);
};

export default { showForm };
