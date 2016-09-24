'use strict';

export const config = {
  api: 'http://swapi.co/api',
  path: {
    people: '/people/',
    planets: '/planets/',
    films: '/films/',
    species: '/species/',
    vehicles: '/vehicles/',
    starships: '/starships/'
  },
  auth: {
    api: 'http://localhost:3090',
    path: {
      login: '/login',
      register: '/register',
    }
  }
};

export default config;
