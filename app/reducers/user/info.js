'use strict';

import { LOGIN_SUBMIT_SUCCESS, } from '../../actions';

export const initialState = {
  email: '',
  password: '',
};

export default (state = initialState, { type, value }) => {

  switch (type) {

    case LOGIN_SUBMIT_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
      };

    default:
      return state;
  }
};
