import React from 'react';

import {isEmail} from 'helpers/validator';
import {listOfLanguage, listOfUserType} from 'static/lists';

import {
  Input,
  Select,
  Submit,
  Wrap,
} from './style';

class UserScreen extends React.PureComponent {
  state = {
    firstName: {
      error: false,
      value: '',
    },
    lastName: {
      error: false,
      value: '',
    },
    companyName: {
      error: false,
      value: '',
    },
    email: {
      error: false,
      value: '',
    },
    userType: {
      error: false,
      value: '',
    },
    language: {
      error: false,
      value: '',
    },
  };

  handleResetState = () => {
    const state = Object.entries(this.state).reduce((acc, next) => {
      acc[next[0]] = {...next[1], value: ''};
      return acc
    }, {});

    this.setState({...state});
  };

  handleChangeState = ({value}, stateProp) => {
    this.setState({
      [stateProp]: {
        error: false,
        value: value.trimStart(),
      }
    })
  };

  handleSubmit = () => {
    let isError = false;

    Object.entries(this.state).forEach(state =>
      state[0] === 'email'
        ? !isEmail(state[1].value) && (isError = this._setError(state[0]))
        : state[1].value.length < 3 && (isError = this._setError(state[0]))
    );

    !isError && (alert('Done 🎉'), this.handleResetState());
  };

  _setError = prop => {
    this.setState({
      [prop]: {
        ...this.state[prop],
        error: true,
      }
    });
    return true;
  };


  render() {
    const {
      firstName, lastName, companyName, email, userType, language
    } = this.state;
    const disabledSubmit = Object.values(this.state).some(({value}) => !value);

    return (
      <Wrap>
        <Input
          error={firstName.error}
          label='firstName'
          onChange={({target}) => this.handleChangeState(target, 'firstName')}
          value={firstName.value}
        />
        <Input
          error={lastName.error}
          label='lastName'
          onChange={({target}) => this.handleChangeState(target, 'lastName')}
          value={lastName.value}
        />
        <Input
          error={email.error}
          label='email'
          onChange={({target}) => this.handleChangeState(target, 'email')}
          value={email.value}
        />
        <Input
          error={companyName.error}
          label='companyName'
          onChange={({target}) => this.handleChangeState(target, 'companyName')}
          value={companyName.value}
        />
        <Select
          error={userType.error}
          label='User type'
          list={listOfUserType}
          onChange={option => this.handleChangeState(option, 'userType')}
          value={userType.value}
        />
        <Select
          error={language.error}
          label='Display language'
          list={listOfLanguage}
          onChange={option => this.handleChangeState(option, 'language')}
          value={language.value}
        />
        <Submit
          color='primary'
          disabled={disabledSubmit}
          variant='contained'
          onClick={this.handleSubmit}
        >
          Billing
        </Submit>
      </Wrap>
    )
  }
}

export default UserScreen;