'use strict';

import React       from 'react';
import { connect } from 'react-redux';
import _           from 'lodash';

const Footer = ({ people }) => {

  // _.forOwn(people.results, function(value, key) {
  //   console.log(key, value.name);
  // });

  // Object.getOwnPropertyNames(people).forEach(function(value, key, array) {
  //   console.log(key, people[value]);
  // });

  // console.log(Object.values(people));

  return (
    <footer className={'footer'}>
      {

        Object.keys(people).map((value, key, array) => {
          if(typeof people[value] == 'object') {
            for (let key in people[value]) {
              console.log(key, people[value][key].name);
            }
          }
        })

      }
    </footer>
  );

};

export default connect((state) => ({
  people: state.people
}))(Footer);
