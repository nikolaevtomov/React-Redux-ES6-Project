'use strict';

import React, { Component } from 'react';
import DocumentTitle        from 'react-document-title';

export class PageNotFound extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="404: Not Found">
        <section className="page-not-found">

          <h3>Page Not Found</h3>

        </section>
      </DocumentTitle>
    );
  }

}

export default PageNotFound;
