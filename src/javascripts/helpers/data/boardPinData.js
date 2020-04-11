import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardPinsByBoardId = (id) => new Promise((resolve, reject) => {
  // axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`);
  // axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`);
  axios.get(`${baseUrl}/boardPins.json?orderBy="boardId"&equalTo="${id}"`)
    .then((response) => {
      const demBoardPins = response.data;
      const boardPins = [];
      // ['farmerCow1', 'farmerCow2'].forEach()
      Object.keys(demBoardPins).forEach((boardPinId) => {
        demBoardPins[boardPinId].id = boardPinId;
        boardPins.push(demBoardPins[boardPinId]);
      });
      resolve(boardPins);
    })
    .catch((err) => reject(err));
});


const getBoardPinsByPinId = (pinId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boardPins.json?orderBy="pinId"&equalTo="${pinId}"`)
    .then((response) => {
      const demBoardPins = response.data;
      const boardPins = [];
      Object.keys(demBoardPins).forEach((boardPinId) => {
        demBoardPins[boardPinId].id = boardPinId;
        boardPins.push(demBoardPins[boardPinId]);
      });
      resolve(boardPins);
    })
    .catch((err) => reject(err));
});

const deleteBoardPin = (fPinId) => axios.delete(`${baseUrl}/boardPins/${fPinId}.json`);

export default { getBoardPinsByBoardId, getBoardPinsByPinId, deleteBoardPin };
