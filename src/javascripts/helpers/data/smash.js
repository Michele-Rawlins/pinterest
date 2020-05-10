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

const getPinsWithBoards = () => new Promise((resolve, reject) => {
  pinData.getPins()
    .then((pinsResponse) => {
      boardData.getBoardsByUid().then((boardResponse) => {
        boardPinData.getBoardPins().then((boardPinResponse) => {
          const finalPins = [];
          pinsResponse.forEach((onePin) => {
            const pin = { boards: [], ...onePin };
            const boardPinsOwners = boardPinResponse.filter((x) => x.pinId === pin.id);
            boardResponse.forEach((oneBoard) => {
              const board = { ...oneBoard };
              const isOwner = boardPinsOwners.find((x) => x.boardUid === board.uid);
              // not owner: undefined !== undefined => false
              // are owner: {age: 83, name: "luke", uid: "12345", id: "farmer2"} !== undefined => true
              // farmer.isChecked = isOwner !== undefined;
              board.boardPinId = isOwner ? isOwner.id : `nope-${pin.id}-${board.id}`;
              pin.boards.push(board);
            });
            finalPins.push(pin);
          });
          resolve(finalPins);
        });
      });
    })
    .catch((err) => reject(err));
});


export default {
  getSingleBoardWithPins,
  completelyRemovePin,
  completelyRemoveBoard,
  getPinsWithBoards,
};
