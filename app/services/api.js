'use strict';

import config  from '../config';

export const ROOT_URL = 'http://localhost:3090';

export function fetchPostLogin(value) {

    return fetch(`${ROOT_URL}/login`, {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify(value),
    })
    .then(response => (response.status !== 200) ? response.status : response.json())
    .catch(error => console.log('api catch: ', error))
}

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
