'use strict';

import axios from 'axios';

const BASE_URL = ``;

// Performing a GET request
export function request(url, param) {

  const url = BASE_URL;

  return (
    axios.get(url)
      .then(function(response) {
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
      });
    );
}

// Performing a POST request
axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
  .then(function(response) {
    console.log('saved successfully')
  });
