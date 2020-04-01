import boardData from './boardData';
import boardPinData from './boardPinData';
import pinData from './pinData';

const getSingleBoardWithPins = (boardId) => new Promise((resolve, reject) => {
  boardData.getBoardrById(boardId)
    .then((response) => {
      const board = response.data;
      board.id = boardId;
      board.pins = [];
      // 1.  get farmerCows by farmer uid
      boardPinData.getboardPinByBoardUid(board.uid).then((boardPins) => {
        // 2.  get ALL cows
        pinData.getPins().then((allPins) => {
          // 3.   SMASH
          boardPins.forEach((boardPin) => {
            const pin = allPins.find((x) => x.id === boardPin.pinId);
            board.pins.push(pin);
          });
          // {
          //   age: 1000,
          //   name: 'zoe',
          //   uid: 'A06GVOBrTNOc6scEZzPrOcij0Yu2',
          //   id: 'farmer1',
          //   cows: [
          //     { id: 'cow1', breed: "Jersey", location: "NSS", name: "Bessie", weight: 30 },
          //     { id: 'cow3', breed: "Angus", location: "NSS", name: "Steak", weight: 50000000000}
          //   ]
          // }
          resolve(board);
        });
      });
    })
    .catch((err) => reject(err));
});

const completelyRemovePin = (pinId) => new Promise((resolve, reject) => {
  pinData.deleteCow(pinId)
    .then(() => {
      // 1.  GET all farmerCows by cowId
      boardPinData.getBoardPinsByPinId(pinId).then((boardPins) => {
        // 2.  loop over all farmerCows from step 1 and DELETE each one
        boardPins.forEach((fPin) => {
          boardPins.deleteFarmerCow(fPin.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleBoardWithPins, completelyRemovePin };
