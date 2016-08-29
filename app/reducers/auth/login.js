'use strict';

import { START_LOGIN } from '../../actions';

export const initialState = {};

export const ROOT_URL = 'http://localhost:3090';

export function userFunction(value) {
  // console.log('userFunction()', value);

    fetch(`${ROOT_URL}/signin`, {
      'method': 'POST',
      'Content-Type': 'application/json',
      'body': JSON.stringify(value)
    })
    .then((response) => {
      return response.json();
      console.log(response);
    })
    .catch( error => {
      console.log(error);
      console.log('catch error');
    })

}

export function signingUser(state, value) {
  // console.log('signingUser()', value);
  return {
    ...state,
    user: userFunction(value)
  }
}

export default (state = initialState, { type, value }) => {

  switch (type) {

    case START_LOGIN:
      return signingUser(state, value);

    default:
      return state;
  }
};
