
const pinMaker = (pin) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += '<div class="card-pins" style="width: 18rem;">';
  domString += `<div class="pin-card" id="${pin.id}">`;
  domString += `<div class="card-header">${pin.name}</div>`;
  domString += `<img class="card-img-top" src="${pin.url}" alt="Pin image showing a pic of title">`;
  domString += '<div class="card-body">';
  // domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of.</p>';
  domString += '<button class="btn btn-danger delete-pin"><i class="far fa-trash-alt"></i></button>';
  domString += '<button class="btn btn-info edit-pin"><i class="fas fa-pen-fancy"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};


export default { pinMaker };
