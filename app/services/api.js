'use strict';

import axios   from 'axios';
import config  from '../config';

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

export function getPosts() {
  const url = `${config.api}${config.path}${config.key}`;
  return request(url);
}
