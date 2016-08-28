import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Login extends Component {

  handleFormSumbit({ email, password }) {
    console.log(email,password)
  }

  render() {

    const { handleSubmit, fields: { email, password } } = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSumbit.bind(this))}>
        <fieldset className={''}>
          <label>Email:</label>
          <input
            className={''}
            {...email} />
        </fieldset>
        <fieldset className={''}>
          <label>Password:</label>
          <input
            className={''}
            {...password} />
        </fieldset>
        <button
          action="submit"
          className={''}>
          Sign In
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(Login);
