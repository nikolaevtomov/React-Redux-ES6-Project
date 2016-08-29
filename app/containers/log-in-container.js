'use strict';

import React, { PropTypes } from 'react';
import { connect }          from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import ButtonComponent      from '../components/button';
import { InputComponent }   from '../components/input';
import { Error }            from '../components/error';
import { startLogin }       from '../actions'

export const LogInContainer = props => {

  const { fields, submit, handleSubmit } = props;
  const { email, password } = fields;

  const handleOnSubmit = () => {
    submit({
      email: email.value,
      password: password.value
    });
    // console.log('enter');
  };

  const buttonItems = {
    name: 'Login',
    type: 'submit',
    onClickAction: () => {}
  };

  return(
    <section className={'loginContainer'}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className={''}>

        <div className={'loginContainer__errors'}>
          {email.touched && email.error && <Error message={email.error} />}
          {password.touched && password.error && <Error message={password.error} />}
        </div>

        <InputComponent placeholder={'E-mail'} label={'E-mail'} type={'email'}
          field={email} />

        <InputComponent placeholder={'Password'} label={'Password'} type={'password'}
          field={password} />

        <ButtonComponent items={buttonItems} />

      </form>
    </section>

  );
}

LogInContainer.propTypes = {
  fields: PropTypes.object.isRequired
};

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = '* E-mail required!';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '* E-mail is not valid!';
  }

  if (!values.password) {
    errors.password = '* Password required!';
  }
  else if (values.password.length < 6) {
    errors.password = '* Password must be at least 6 characters!';
  }

  return errors;
};

export const ConnectedLogInContainer = connect(
  (state) => ({

  }),
  {
    submit: startLogin,
  }
)(LogInContainer);

export default reduxForm(
  {
    form: 'LogInContainer',
    fields: ['email', 'password'],
    validate,
  }
  // ,
  // (state) => ({
  //   initialValues: {
  //
  //   },
  // })
)(ConnectedLogInContainer);
