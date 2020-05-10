
const pinMaker = (pins) => {
  console.error('pins', pins);
  let domString = '';
  domString += '<div class="col-3">';
  domString += '<div class="card-pins" style="width: 18rem;">';
  domString += `<div class="pin-card" id="${pins.id}">`;
  domString += `<div class="card-header">${pins.name}</div>`;
  domString += `<img class="card-img-top" src="${pins.url}" alt="Pin image showing a pic of title">`;
  domString += '<div class="card-body">';
  // domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of.</p>';
  domString += '<button class="btn btn-danger delete-pin"><i class="far fa-trash-alt"></i></button>';
  domString += '<button class="btn btn-info edit-pin"><i class="fas fa-pen-fancy"></i></button>';
  // pin.boards.forEach((board) => {
  //   domString += '<div class="form-check">';
  //   domString += `<input type="checkbox" class="form-check-input farmer-cow-checkbox" data-farmer-uid=${board.uid} id=${board.boardPinId}>`;
  //   domString += `<label class="form-check-label" for="exampleCheck1">${board.name}</label>`;
  //   domString += '</div>';
  // });
  domString += '</form>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};


export default { pinMaker };
