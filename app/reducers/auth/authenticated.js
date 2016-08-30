'use strict';

import { START_LOGIN, START_LOGOUT } from '../../actions';

export const initialState = false;

export default (state = initialState, { type, value }) => {

  switch (type) {

    case START_LOGIN:
      return true;

    case START_LOGOUT:
      return false;

    default:
      return state;
  }
};
