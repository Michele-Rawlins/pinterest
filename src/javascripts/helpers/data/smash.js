import boardData from './boardData';
import boardPinData from './boardPinData';
import pinData from './pinData';

const getSingleBoardWithPins = (boardId) => new Promise((resolve, reject) => {
  boardData.getBoardById(boardId)
    .then((response) => {
      const board = response.data;
      board.id = boardId;
      board.pins = [];
      // Getting all relationships (boardId, pinId) where boardId equals board.id
      boardPinData.getBoardPinsByBoardId(board.id)
        .then((boardPins) => {
        // Getting all pins
          pinData.getPins()
            .then((allPins) => {
              // Associating pinId with the actual pin
              boardPins.forEach((boardPin) => {
                const foundPin = allPins.find((x) => x.id === boardPin.pinId);
                board.pins.push(foundPin);
              });
              resolve(board);
            });
        });
    })
    .catch((err) => reject(err));
});

const completelyRemovePin = (pinId) => new Promise((resolve, reject) => {
  pinData.deletePin(pinId)
    .then(() => {
      // 1.  GET all farmerCows by cowId
      boardPinData.getBoardPinsByPinId(pinId).then((boardPins) => {
        // 2.  loop over all farmerCows from step 1 and DELETE each one
        boardPins.forEach((fPin) => {
        // removed .deleteBoardPin
          pinData.deletePin(fPin.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

const completelyRemoveBoard = (boardId) => new Promise((resolve, reject) => {
  boardData.deleteBoard(boardId)
    .then(() => {
      // 1.  GET all farmerCows by cowId
      boardPinData.getBoardPinsByPinId(boardId).then((boardPins) => {
        // 2.  loop over all farmerCows from step 1 and DELETE each one
        boardPins.forEach((fPin) => {
          boardPins.deleteBoardPin(fPin.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleBoardWithPins, completelyRemovePin, completelyRemoveBoard };
