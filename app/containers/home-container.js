'use strict';

import React, { Component } from 'react';
import { Link }             from 'react-router';
import DocumentTitle        from 'react-document-title';

export class HomeContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home Page">
        <section className="home-container">

          <h3>Home Page</h3>
          <div>
            <Link to="/sample">Sample Page</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

export default HomeContainer;
