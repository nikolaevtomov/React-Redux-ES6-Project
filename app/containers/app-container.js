'use strict';

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Header               from '../components/header';
import Footer               from '../components/footer';

export class AppContainer extends Component {

  constructor(props) {
    super(props);
  }

  loadingScreen() {
    return(
      <div className={'loading'}> ...loading </div>
    );
  }

  renderContent = () => ((this.props.loading) ? this.loadingScreen() : this.props.children);

  render() {
    return (
      <div className={`app-container`}>
        <Header />
        { this.renderContent() }
        <Footer />
      </div>
    );
  }

};

export default connect((state) => ({
  loading: state.app.loading
}))(AppContainer);
