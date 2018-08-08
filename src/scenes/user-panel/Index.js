import React from 'react';

import {listOfUserType, listOfLanguage} from 'root/static/lists';
import {isEmail} from 'root/helpers/validator';

import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

import {
  Content,
  Input,
  SaveButton,
  SaveIcon,
  Select,
  Wrap,
} from './style';

class User extends React.Component {
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

  handleChangeState = ({value}, stateProp) => {
    this.setState({
      [stateProp]: {
        error: false,
        value: value.trimStart(),
      }
    })
  };

  handleSave = () => {
    const {firstName, lastName} = this.state;
    let isError = false;

    Object.entries(this.state).forEach(state =>
      state[0] === 'email'
        ? !isEmail(state[1].value) && (isError = this._setError(state[0]))
        : state[1].value.length < 3 && (isError = this._setError(state[0]))
    );

    !isError &&
    this.props.setUserSummary({userName: `${firstName.value} ${lastName.value}`});
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
    const showSaveButton = Object.values(this.state).every(({value}) => !!value);

    return (
      <Wrap>
        <Content>
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
            label="User type"
            list={listOfUserType}
            onChange={option => this.handleChangeState(option, 'userType')}
            value={userType.value}
          />
          <Select
            error={language.error}
            label="Display language"
            list={listOfLanguage}
            onChange={option => this.handleChangeState(option, 'language')}
            value={language.value}
          />
        </Content>
        <Zoom in={showSaveButton}>
          <SaveButton>
            <Button color='primary' onClick={this.handleSave} variant='outlined'>
              <SaveIcon/>
              Save
            </Button>
          </SaveButton>
        </Zoom>
      </Wrap>
    )
  }
}

export default User;