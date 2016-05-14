'use strict';

import React                from 'react';
import { connect }          from 'react-redux';
import Header               from '../components/header';
import Footer               from '../components/footer';

export const AppContainer = ({ children }) => {

    return (
      <div className={`app-container`}>
        <Header />
        { children }
        <Footer />
      </div>
    );

};

export default AppContainer;
