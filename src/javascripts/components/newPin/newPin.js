const showAddPinForm = () => {
  $('#modalAddPin').modal('show');
};

export default { showAddPinForm };
// const pinForm = (e) => {
//   const boardId = e.target.closest('.new-pin').id;
//   let domString = '';
//   domString += '<h2 class="text-center">New Pin</h2>';
//   domString += `<form class="col-10 offset-1 pin-form ${boardId}">`;
//   domString += '<div class="form-group">';
//   domString += '<label for="pin-name">Name</label>';
//   domString += '<input type="text" class="form-control" id="pin-name" placeholder="Outfit">';
//   domString += '</div>';
//   domString += '<div class="form-group">';
//   domString += '<label for="pin-Url">Photo</label>';
//   domString += '<input type="text" class="form-control" id="pin-photo" placeholder="Photo Here">';
//   domString += '</div>';
//   domString += '<button type="submit" class="btn btn-dark" id="pin-Creator">Add Pin</button>';
//   domString += '</form>';

//   utils.printToDom('new-pin', domString);
// };

// export default { pinForm };
