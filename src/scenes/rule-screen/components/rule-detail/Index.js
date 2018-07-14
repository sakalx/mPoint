import React from 'react';

import {
  listOfActions,
  listOfCompanies,
  listOfRegions,
  listOfRuleNames,
  listOfTypes,
  listOfVersion,
} from 'root/static/lists-for-select';

import RenderSelect from 'root/components/select';
import Autocomplete from 'root/components/autocomplete';
import SwitchesGroup from 'root/components/switches-group';
import RadioButtons from 'root/components/radio-buttons';
import RenderInputNumber from 'root/components/inmut-number';

import Slide from '@material-ui/core/Slide';

import {
  PrefixRuleName,
  Company,
  Wrap,
  RightSection,
  LeftSection,
  RuleName,
} from './style';

class RuleDetail extends React.PureComponent {
  state = {
    region: {value: ''},
    company: {value: ''},
    ruleName: {value: ''},
    percentage: {value: ''},
    switches: {
      URL: false,
      Inactive: false,
      Impression: false,
      Test: false,
    },
    radioButtons: {value: ''},
    version: {value: ''},
    action: {value: ''},
    type: {value: ''},
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

  handleChangeType = type => {
    this.setState({type})
  };

  handleChangePercentage = event => {
    this.setState({
      percentage: {value: Number(event.target.value)}
    });
  };

  handleChangeSwitch = label => event => {
    this.setState({
      switches: {
        ...this.state.switches,
        [label]: event.target.checked,
      },
    });
  };

  handleChangeAction = event => {
    this.setState({radioButtons: {value: event.target.value}});
  };

  handleChangeVersion = event => {
    this.setState({version: {value: event.target.value}});
  };

  renderPrefixRuleName = () => (
    <PrefixRuleName variant="caption">
      {this.state.company.value}
    </PrefixRuleName>
  );

  render() {
    const {
      company, region, percentage, switches,
      version, ruleName, type, radioButtons,
    } = this.state;


    return (
      <Wrap>
        <LeftSection>

          <Wrap>
            <RenderSelect
              label="Region"
              list={listOfRegions}
              onChange={this.handleChangeRegion}
              value={region.value}
            />

            <Slide direction="right" mountOnEnter in={!!region.value}>
              <React.Fragment>
                <Company>
                  <Autocomplete
                    onChange={this.handleChangeCompany}
                    suggestions={listOfCompanies}
                    stateKey="company"
                    value={company.value}
                  />
                </Company>

                <RuleName>
                  <Autocomplete
                    onChange={this.handleChangeRuleName}
                    suggestions={listOfRuleNames}
                    stateKey="ruleName"
                    value={company.value ? ` ${ruleName.value}` : ruleName.value}
                    startAdornment={company.value && this.renderPrefixRuleName()}
                    disabled={!company.value}
                  />
                </RuleName>
              </React.Fragment>
            </Slide>
          </Wrap>
          <Wrap>
            <RadioButtons
              list={listOfActions}
              onChange={this.handleChangeAction}
              row={false}
              title="Action"
              value={radioButtons.value}
            />
            <RenderSelect
              label="Type"
              list={listOfTypes}
              onChange={this.handleChangeType}
              value={type.value}
            />
            <RadioButtons
              list={listOfVersion}
              onChange={this.handleChangeVersion}
              row={true}
              title="Version"
              value={version.value}
            />
          </Wrap>
        </LeftSection>

        <RightSection>
          <SwitchesGroup
            onChange={this.handleChangeSwitch}
            row={true}
            switches={switches}
            title="Options"
          />

          <RenderInputNumber
            label="Percentage"
            maxValue="50"
            onChange={this.handleChangePercentage}
            suffix="%"
            value={percentage.value}
          />


        </RightSection>
      </Wrap>
    )
  }
}

export default RuleDetail;