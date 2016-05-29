'use strict';

import React, { Component } from 'react';
import DocumentTitle        from 'react-document-title';

export class PageNotFound extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title={`404: Not Found`}>
        <section className={`container page-not-found`}>
          <h3>404: Not Found</h3>
        </section>
      </DocumentTitle>
    );
  }
};

export default PageNotFound;
