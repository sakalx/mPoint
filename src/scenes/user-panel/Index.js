import React from 'react';

import {listOfUserType, listOfLanguage} from 'root/static/lists';
import {isEmail} from 'root/helpers/validator';

import SaveButton from 'root/components/save-button';

import Typography from '@material-ui/core/Typography';

import {
  Content,
  Input,
  Select,
  UserSubTitle,
  Wrap,
} from './style';

class User extends React.PureComponent {
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
    let isError = false;

    Object.entries(this.state).forEach(state =>
      state[0] === 'email'
        ? !isEmail(state[1].value) && (isError = this._setError(state[0]))
        : state[1].value.length < 3 && (isError = this._setError(state[0]))
    );

    !isError &&
    this.props.handlePanel({
      expanded: 'campaign',
      userSubTitle: this._userSubTitle,
    });
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

  _userSubTitle = () => {
    const {firstName, lastName, companyName} = this.state;

    return (
      <UserSubTitle>
        <Typography color='textSecondary' variant='title'>
          {`${firstName.value} ${lastName.value}`}
        </Typography>
        <Typography color='textSecondary' variant='body2'>{companyName.value}</Typography>
      </UserSubTitle>
    )
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
        <SaveButton callBack={this.handleSave} visible={showSaveButton}/>
      </Wrap>
    )
  }
}

export default User;