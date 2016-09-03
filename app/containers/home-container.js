'use strict';

import React, { Component } from 'react';
import { Link }             from 'react-router';
import DocumentTitle        from 'react-document-title';
import { connect }          from 'react-redux';
import { getCharacters }    from '../selectors';

export class HomeContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title={`Home Page`}>
        <section className={`container home-container`}>
          <h3>Home Page</h3>

          <ul className={''}>
            {
              this.props.characters
              .map(character =>
                <li className={''}>{ character.name }</li>)
            }
          </ul>

          <div>
            <Link to="/login">Login Page</Link>
          </div>
          <div>
            <Link to="/sample">Sample Page</Link>
          </div>
        </section>
      </DocumentTitle>
    );
  }
};

export default connect(
  (state) => ({
    characters: getCharacters(state)
  })
)(HomeContainer);
