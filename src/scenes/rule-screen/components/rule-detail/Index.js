import React from 'react';

import {isString, isPercentage} from 'root/helpers/validator';
import {camelCaseToString} from 'root/helpers/camel-case';
import {
  listOfCompanies,
  listOfRegions,
  listOfSwitchesRuleDetail,
} from 'root/static/lists-for-select';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import RenderSelect from 'root/components/render-select';
import Autocomplete from 'root/components/render-autocomplete';
import RangeSlider from 'root/components/render-range-slider';
import SwitchesGroup from 'root/components/render-switches';

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
    company: {value: ''},
    region: {value: "USA - East"},
    percentage: {value: 0},
    switches: {
      SSP: false,
      DSP: false,
    },
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

  handleChangeCompany = (event, {newValue}) => {
    this.setState({company: {value: newValue}});
  };

  handleChangeRegion = region => {
    this.setState({region})
  };

  handleChangePercentage = (event, value) => {
    this.setState({
      percentage: {value: Number(value.toFixed(1))}
    });
  };

  handleChangeSwitches = label => event => {
    this.setState({
      switches: {
        ...this.state.switches,
        [label]: event.target.checked,
      },
    });
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
    const {company, region, percentage, switches} = this.state;

    return (
      <Wrap>
        {this.renderInputField('ruleName', isString)}
        {/*  <PercentageInput>
          {this.renderInputField('percentage', isPercentage)}
          <Typography variant="title" color="textSecondary" component="span">%</Typography>
        </PercentageInput>*/}

        <RenderSelect
          label="Region"
          list={listOfRegions}
          onChange={this.handleChangeRegion}
          value={region.value}
        />

        <Autocomplete
          onChange={this.handleChangeCompany}
          suggestions={listOfCompanies}
          label="Company"
          value={company.value}
        />

        <RangeSlider
          onChange={this.handleChangePercentage}
          value={percentage.value}
        />

        <SwitchesGroup
          list={listOfSwitchesRuleDetail}
          onChange={this.handleChangeSwitches}
          title="SSP / DSP"
          switches={switches}
        />
      </Wrap>
    )
  }
}

export default RuleDetail;