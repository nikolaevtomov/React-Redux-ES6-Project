'use strict';

import {
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_FAILED
} from '../../actions';

export const initialState = false;

export default (state = initialState, { type, value }) => {

  switch (type) {

    case LOGIN_SUBMIT_SUCCESS:
      return true;

    case LOGIN_SUBMIT_FAILED:
      return initialState;

    default:
      return state;
  }
};
