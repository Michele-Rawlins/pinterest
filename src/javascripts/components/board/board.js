const boardMaker = (board) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card board-card" id=${board.name}>`;
  domString += `<div class="card-header">${board.images}</div>`;
  domString += '<div class="card-body">';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { boardMaker };
