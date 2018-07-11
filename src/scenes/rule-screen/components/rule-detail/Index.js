import React from 'react';

import {isString, isPercentage} from 'root/helpers/validator';
import {camelCaseToString} from 'root/helpers/camel-case';
import {listOfRegions} from 'root/LISTS'

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import RenderSelect from 'root/components/render-select';

import {
  PercentageInput,
  Wrap,
} from './style';


class RuleDetail extends React.PureComponent {
  state = {
    ruleName: {
      value: '',
      error: false,
      errorLabel: 'You can use only letters',
    },
    percentage: {
      value: '',
      error: false,
      errorLabel: 'Range from 0 to 100',
    },
    region: {value: "USA - East"},
  };

  handleChange = (key, validator) => event => {
    const value = event.target.value.trimStart();
    const {errorLabel} = this.state[key];
    const valid = value.length === 0 || validator(value);

    const setStateError = error =>
      this.setState({[key]: {value, error, errorLabel}});

    (valid)
      ? setStateError(false)
      : setStateError(true)
  };

  handleChangeRegion = region => {
    this.setState({region})
  };

  renderInputField = (key, validator) => {
    const {value, error, errorLabel} = this.state[key];

    const label = (error)
      ? errorLabel
      : camelCaseToString(key);

    return (
      <TextField
        error={error}
        id={key}
        label={label}
        margin="normal"
        onChange={this.handleChange(key, validator)}
        value={value}
      />
    )
  };


  render() {
    const {region} = this.state;

    return (
      <Wrap>
        {this.renderInputField('ruleName', isString)}
        <PercentageInput>
          {this.renderInputField('percentage', isPercentage)}
          <Typography variant="title" color="textSecondary" component="span">%</Typography>
        </PercentageInput>
        <RenderSelect
          label="Region"
          list={listOfRegions}
          onChangeRegion={this.handleChangeRegion}
          value={region.value}
        />
      </Wrap>
    )
  }
}

export default RuleDetail;