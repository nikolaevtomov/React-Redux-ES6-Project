'use strict';

import react from 'react';

export const Error = ({ message }) => {

  return(
    <p className={'errorMsg'}>{message}</p>
  );
}

export default Error;
