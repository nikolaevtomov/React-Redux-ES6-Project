'use strict';

import axios   from 'axios';
import config  from '../config';

// get request with axios
export function request(path) {
  return axios.get(path)
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      console.log('AXIOS ERROR: ' + response);
    });
}

export function getPeople() {
  const url = `${config.api}${config.path.people}`;
  return request(url);
}

export function getPlanets() {
  const url = `${config.api}${config.path.planets}`;
  return request(url);
}

export function getFilms() {
  const url = `${config.api}${config.path.films}`;
  return request(url);
}

export function getSpecies() {
  const url = `${config.api}${config.path.species}`;
  return request(url);
}

export function getVehicles() {
  const url = `${config.api}${config.path.vehicles}`;
  return request(url);
}

export function getStarships() {
  const url = `${config.api}${config.path.starships}`;
  return request(url);
}
