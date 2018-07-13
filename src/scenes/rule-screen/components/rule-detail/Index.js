import React from 'react';

import {
  listOfCompanies,
  listOfRegions,
  listOfRuleNames,
} from 'root/static/lists-for-select';

import RenderSelect from 'root/components/render-select';
import Autocomplete from 'root/components/render-autocomplete';
import RangeSlider from 'root/components/render-range-slider';
import SwitchesGroup from 'root/components/render-switches-group';
import CheckboxesGroup from 'root/components/render-checkboxes-group';

import Slide from '@material-ui/core/Slide';

import {
  PrefixRuleName,
  SectionCompany,
  Wrap,
} from './style';

class RuleDetail extends React.PureComponent {
  state = {
    region: {value: ''},
    company: {value: ''},
    ruleName: {value: ''},
    percentage: {value: 0},
    switches: {
      SSP: false,
      DSP: false,
    },
    checkboxes: {
      URL: false,
      Inactive: false,
      Impression: false,
      Test: false,
    },
  };

  handleChangeRegion = region => {
    this.setState({region})
  };

  handleChangeCompany = (event, {newValue}) => {
    this.setState({company: {value: newValue}});
  };

  handleChangeRuleName = (event, {newValue}) => {
    this.setState({ruleName: {value: newValue.trimStart()}});
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

  handleChangeCheckboxes = label => event => {
    this.setState({
      checkboxes: {
        ...this.state.checkboxes,
        [label]: event.target.checked,
      },
    });
  };

  renderPrefixRuleName = () => (
    <PrefixRuleName variant="caption">
      {this.state.company.value}
    </PrefixRuleName>
  );

  render() {
    const {
      company, region, percentage, switches, checkboxes, ruleName,
    } = this.state;


    return (
      <Wrap>
        <RenderSelect
          label="Region"
          list={listOfRegions}
          onChange={this.handleChangeRegion}
          value={region.value}
        />

        <Slide direction="right" mountOnEnter in={!!region.value}>
          <React.Fragment>
            <SectionCompany>
              <Autocomplete
                onChange={this.handleChangeCompany}
                suggestions={listOfCompanies}
                stateKey="company"
                value={company.value}
              />
            </SectionCompany>

            <Autocomplete
              onChange={this.handleChangeRuleName}
              suggestions={listOfRuleNames}
              stateKey="ruleName"
              value={company.value ? ` ${ruleName.value}` : ruleName.value}
              startAdornment={company.value && this.renderPrefixRuleName()}
              disabled={!company.value}
            />
          </React.Fragment>
        </Slide>

        <RangeSlider
          onChange={this.handleChangePercentage}
          value={percentage.value}
          step={5}
        />

        <SwitchesGroup
          onChange={this.handleChangeSwitches}
          title="SSP / DSP"
          switches={switches}
        />

        <CheckboxesGroup
          onChange={this.handleChangeCheckboxes}
          title="Options"
          checkboxes={checkboxes}
        />
      </Wrap>
    )
  }
}

export default RuleDetail;