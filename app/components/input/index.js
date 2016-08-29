'use strict';

import React             from 'react';
import { getInputProps } from '../../utils';

export const InputComponent = props => {

  const { placeholder, label, field, type } = props;

  return(
      <fieldset className={'fieldset'}>
        <label className={'fieldset__label'}>{label}</label>
        <input
          className={`fieldset__input ${(field.touched && field.error) ? 'error' : ''}`}
          type={type}
          placeholder={placeholder}
          {...getInputProps(field)} />
      </fieldset>
  );
}
