'use strict';

import React                from 'react';
import { connect }          from 'react-redux';
import Header               from '../components/header';
import Footer               from '../components/footer';

export const CoreContainer = ({ children }) => {

    return (
      <div>
        <Header />
        { children }
        <Footer />
      </div>
    );

};

export default CoreContainer;
