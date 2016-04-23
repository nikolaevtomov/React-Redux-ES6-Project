'use strict';

import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import { Link }                   from 'react-router';
import DocumentTitle              from 'react-document-title';
import { sampleShow, sampleHide } from '../../core/actions/index';

export const SampleContainer = ({ visible, dispatch }) => {

  const handleActivate = () => {
    dispatch(sampleShow());
  }

  const handleDeactivate = () => {
    dispatch(sampleHide());
  }

  return (
    <DocumentTitle title="Sample Page">
      <section className="sample-page">

        <div>
          <h3 className={`sample ${(visible) ? 'active' : ''}`}>Semple Page</h3>
          <button type="button" onClick={ handleActivate }>Activate</button>
          <button type="button" onClick={ handleDeactivate }>Deactivate</button>
        </div>

        <div>
          <Link to="/">Back to Home</Link>
        </div>

      </section>
    </DocumentTitle>
  );

}

export default connect((state) => {
  return {
    visible: state.sampleShowHide
  };
})(SampleContainer);
