'use strict';

import axios from 'axios';

// get request with axios
export function request(path) {
  return axios.get(path)
    .then((response) => {
      return response;
    })
    .catch((response) => {
      console.log('AXIOS ERROR: ' + response);
    });
}
