'use strict';

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Loading              from '../components/loading';
import Header               from '../components/header';
import Footer               from '../components/footer';

export class AppContainer extends Component {

  constructor(props) {
    super(props);
  }

  renderContent = () => ((this.props.loading) ? <Loading /> : this.props.children);

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
  loading: state.ui.app.loading
}))(AppContainer);
