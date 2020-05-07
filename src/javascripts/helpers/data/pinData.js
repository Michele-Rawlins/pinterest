import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const demPins = response.data;
      const pins = [];
      if (demPins) {
        Object.keys(demPins).forEach((pinId) => {
          demPins[pinId].id = pinId;
          pins.push(demPins[pinId]);
        });
      }

      resolve(pins);
    })
    .catch((err) => reject(err));
});

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);
const addPinData = (newPin) => axios.post(`${baseUrl}/pins.json`, newPin);

export default { getPins, deletePin, addPinData };
