'use strict';

import react from 'react';

export const ButtonComponent = props => {

  const { items: { name, type, onClickAction } } = props;

  return(
    <button
      className={'button'}
      type={type}
      onClick={onClickAction}>
      {name}
    </button>
  );
}

export default ButtonComponent;
