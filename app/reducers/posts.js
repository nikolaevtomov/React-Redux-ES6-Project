'use strict';

import axios from 'axios';

import {
  FETCH_POSTS
} from '../actions';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=nikolaev';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

const initialState = { all: [], post: null };

export default function(state = initialState, action) {

  switch(action.type) {

  case FETCH_POSTS:
    return { ...state, all: action.payload.data };

  default:
    return state;
  }
}
