'use strict';

import config  from '../config';

// auth header
const defaultHeaderAuth = {
  'method': 'GET',
  'Content-Type': 'application/json'
};
// custom auth call
export function requestAuth(path, header = defaultHeaderAuth) {
  return fetch(`${path}`, header)
  .then((response) => (response.ok) ? response.json() : response)
  .catch(error => console.log('api catch: ', error))
}
// login request
export function getAuthLogin(value) {
  const header = {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(value),
  };
  return requestAuth(`${config.auth.api}${config.auth.path.login}`, header);
}
// register request
export function getAuthRegister(value) {
  const header = {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(value),
  };
  return requestAuth(`${config.auth.api}${config.auth.path.register}`, header);
}

// get starwords

const defaultHeader = {
  'method': 'GET',
  'Content-Type': 'application/json'
};

export function request(path, header = defaultHeader) {
  return fetch(`${config.api}${path}`, header)
    .then((response) => {
      return response.json();
    })
    .catch(error => console.log(error));
}

export function getPeople() {
  const header = {
    // 'method': 'GET',
    // 'Content-Type': 'application/json'
  };
  return request(config.path.people, header);
}

export function getPlanets() {
  return request(config.path.planets);
}

export function getFilms() {
  return request(config.path.films);
}

export function getSpecies() {
  return request(config.path.species);
}

export function getVehicles() {
  return request(config.path.vehicles);
}

export function getStarships() {
  return request(config.path.starships);
}
