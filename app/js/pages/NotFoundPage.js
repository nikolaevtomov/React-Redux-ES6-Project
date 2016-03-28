'use strict';

import React, { Component } from 'react';
import DocumentTitle        from 'react-document-title';

class NotFoundPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="404: Not Found">
        <section className="not-found-page">

          <h3>Page Not Found</h3>
          
        </section>
      </DocumentTitle>
    );
  }

}

export default NotFoundPage;
