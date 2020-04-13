const boardMaker = (board) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="board-card" id="${board.id}">`;
  domString += `<div class="card-header">${board.name}</div>`;
  domString += `<img class="card-img-top" src="${board.url}" alt="Board image for title of board">`;
  domString += '<div class="card-body">';
  domString += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-clipboard-list"></i></button>';
  domString += '<button class="btn btn-danger delete-board"><i class="far fa-trash-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { boardMaker };
