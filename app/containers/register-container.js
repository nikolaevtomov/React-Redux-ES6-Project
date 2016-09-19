'use strict';

import React, { PropTypes } from 'react';
import { connect }          from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import ButtonComponent      from '../components/button';
import { InputComponent }   from '../components/input';
import { Error }            from '../components/error';
import { registerSubmitBegin } from '../actions';

export const RegisterContainer = props => {

  const { fields, registerSubmit, handleSubmit } = props;
  const { email, password, repassword, name, surname } = fields;

  const handleOnSubmit = () => {
    registerSubmit({
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
    });
  };

  const buttonItems = {
    name: 'Register',
    type: 'submit',
    onClickAction: () => {}
  };

  return(
    <section className={'loginContainer registerContainer'}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className={''}>

        <div className={'loginContainer__errors'}>
          {name.touched && name.error && <Error message={name.error} />}
          {surname.touched && surname.error && <Error message={surname.error} />}
          {email.touched && email.error && <Error message={email.error} />}
          {password.touched && password.error && <Error message={password.error} />}
          {repassword.touched && repassword.error && <Error message={repassword.error} />}
        </div>

        <InputComponent name={'name'} placeholder={'Name'} label={'Name'} type={'text'}
          field={name} />

        <InputComponent name={'surname'} placeholder={'Surname'} label={'Surname'} type={'text'}
          field={surname} />

        <InputComponent name={'email'} placeholder={'E-mail'} label={'E-mail'} type={'email'}
          field={email} />

        <InputComponent name={'password'} placeholder={'Password'} label={'Password'} type={'password'}
          field={password} />

        <InputComponent name={'repassword'} placeholder={'Re-Password'} label={'Re-Password'} type={'password'}
          field={repassword} />

        <ButtonComponent items={buttonItems} />

      </form>
    </section>

  );
}

RegisterContainer.propTypes = {
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

  if (!values.repassword) {
    errors.repassword = '* Re-Password required!';
  }
  else if (values.repassword.length < 6) {
    errors.repassword = '* Re-Password must be at least 6 characters!';
  } else if (values.password !== values.repassword){
    errors.repassword = '* Password must match!';
  }

  if (!values.name) {
    errors.name = '* Name required!';
  }

  if (!values.surname) {
    errors.surname = '* Surname required!';
  }

  return errors;
};

export const ConnectedRegisterContainer = connect(
  (state) => ({

  }),
  {
    registerSubmit: registerSubmitBegin,
  }
)(RegisterContainer);

export default reduxForm(
  {
    form: 'Register-Form',
    fields: ['email', 'password', 'repassword', 'name', 'surname'],
    validate,
  }
)(ConnectedRegisterContainer);
