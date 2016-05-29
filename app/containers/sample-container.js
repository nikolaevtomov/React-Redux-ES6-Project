'use strict';

import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import { Link }                   from 'react-router';
import DocumentTitle              from 'react-document-title';
import { toggleVisibility }       from '../actions';

export class SampleContainer extends Component {

  handleToggle() {
    this.props.toggle();
  }

  render() {
    return (
      <DocumentTitle title={`Sample Page`}>
        <section className={`container sample-container`}>
          <div>
            <h3 className={`sample ${(this.props.visibility) ? 'active' : ''}`}>Semple Page</h3>
            <button type="button" onClick={ this.handleToggle.bind(this) }>Toggle Visibility</button>
          </div>
          <div>
            <Link to="/">Back to Home</Link>
          </div>
        </section>
      </DocumentTitle>
    );
  };
  }

export default connect(
  (state) => ({
    visibility: state.ui.visibility
  }),
  {
    toggle: toggleVisibility
  }
)(SampleContainer);
