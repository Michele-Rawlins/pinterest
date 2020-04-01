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

// const deleteCow = (cowId) => axios.delete(`${baseUrl}/cows/${cowId}.json`);

export default { getPins };
