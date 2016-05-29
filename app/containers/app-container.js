'use strict';

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Header               from '../components/header';
import Footer               from '../components/footer';

export class AppContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`app-container`}>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }

};

export default AppContainer;
