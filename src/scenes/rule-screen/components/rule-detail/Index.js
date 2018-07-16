import React from 'react';

import {
  listOfActions,
  listOfCompanies,
  listOfRuleNames,
  listOfTypes,
  listOfVersion,
} from 'root/static/lists-for-select';

import Autocomplete from 'root/components/autocomplete';
import RadioButtons from 'root/components/radio-buttons';
import SwitchesGroup from 'root/components/switches-group';

import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

import {
  Action,
  Condition,
  Content,
  ContentCard,
  ExpandButton,
  LeftSection,
  Percentage,
  PrefixRuleName,
  RightSection,
  RowAlignCentre,
  RowAlignStart,
  RuleType,
} from './style';

class RuleDetail extends React.PureComponent {
  state = {
    company: {value: ''},
    ruleName: {value: ''},
    action: {value: ''},
    ruleType: {value: ''},
    percentage: {value: ''},
    content: {value: ''},
    condition: {value: ''},
    version: {value: ''},
    expandOption: false,
    options: {
      URL: false,
      Inactive: false,
      Impression: false,
      Test: false,
    },
  };

  handleChangeCompany = (event, {newValue}) => {
    this.setState({company: {value: newValue}});
  };

  handleChangeRuleName = (event, {newValue}) => {
    this.setState({ruleName: {value: newValue.trimStart()}});
  };

  handleChangeType = ruleType => {
    this.setState({ruleType})
  };

  handleChangePercentage = event => {
    this.setState({
      percentage: {value: Number(event.target.value)}
    });
  };

  handleChangeOption = label => event => {
    this.setState({
      options: {
        ...this.state.options,
        [label]: event.target.checked,
      },
    });
  };

  handleChangeAction = event => {
    this.setState({action: {value: event.target.value}});
  };

  handleChangeVersion = event => {
    this.setState({version: {value: event.target.value}});
  };

  handleShowOption = () => {
    this.setState(state => ({expandOption: !state.expandOption}));
  };


  handleChangeContent = event => {
    this.setState({content: {value: event.target.value}});
  };

  handleChangeCondition = event => {
    this.setState({condition: {value: event.target.value}});
  };

  renderPrefixRuleName = () => (
    <PrefixRuleName variant="caption">
      {this.state.company.value}
    </PrefixRuleName>
  );

  _emptyValues = () => Object.entries(this.state)
    .filter(state =>
      typeof state[1].value === "string"
      && state[1].value.length === 0
    );

  _hasValue = () => Object.values(this.state)
    .some(({value}) =>
      typeof value === "string" && value.length > 0
    );

  _validation = () => {
    const notValidKeys = this._emptyValues()
      .reduce((acc, [stateKey, stateValue]) => {
        acc[stateKey] = {...stateValue, error: true};
        return acc
      }, {});

    this.setState({
      ...this.state,
      ...notValidKeys,
    })
  };


  renderSaveBtn = () => {
    const hasValue = this._hasValue();

    return (
      <Button
        key={'save-rule'}
        variant="outlined"
        color="primary"
        onClick={this._validation}
      >
        {hasValue ? <SaveIcon/> : <CloseIcon/>}
        {hasValue ? 'save' : 'cancel'}
      </Button>
    )
  };

  renderExpandOptionBtn = () => {
    const {expandOption} = this.state;

    return (
      <Tooltip key={'expand-option'} title={expandOption ? "Hide options" : "Show option"}>
        <ExpandButton
          onClick={this.handleShowOption}
          aria-expanded={expandOption}
          aria-label="Toggle option"
        >
          <ExpandMoreIcon/>
        </ExpandButton>
      </Tooltip>
    )
  };

  render() {
    const {
      action,
      company,
      condition,
      content,
      options,
      percentage,
      ruleName,
      ruleType,
      expandOption,
      version,
    } = this.state;

    return (
      <Card>
        <CardHeader
          action={[this.renderSaveBtn(), this.renderExpandOptionBtn()]}
          title="Set of rule"
          subheader={
            company.value ? `${company.value} ${ruleName.value}` : 'New'
          }
        />

        <ContentCard>
          <Collapse in={expandOption} timeout="auto" unmountOnExit>
            <SwitchesGroup
              onChange={this.handleChangeOption}
              row={true}
              switches={options}
              title="Options"
            />
          </Collapse>

          <LeftSection>
            <RowAlignCentre>
              <Autocomplete
                error={company.error}
                label="company"
                onChange={this.handleChangeCompany}
                suggestions={listOfCompanies}
                value={company.value}
              />
              <Autocomplete
                disabled={!company.value}
                error={ruleName.error}
                label="ruleName"
                onChange={this.handleChangeRuleName}
                startAdornment={company.value && this.renderPrefixRuleName()}
                suggestions={listOfRuleNames}
                value={company.value ? ` ${ruleName.value}` : ruleName.value}
              />
              <Action
                error={action.error}
                list={listOfActions}
                onChange={this.handleChangeAction}
                row={true}
                title="Action"
                value={action.value}
              />
              <RuleType
                error={ruleType.error}
                label="Type"
                list={listOfTypes}
                onChange={this.handleChangeType}
                value={ruleType.value}
              />
              <Percentage
                error={percentage.error}
                label="Percentage"
                maxValue="50"
                onChange={this.handleChangePercentage}
                suffix="%"
                value={percentage.value}
              />
            </RowAlignCentre>
            <RowAlignStart>
              <Content
                error={content.error}
                label="content"
                multiline={true}
                onChange={this.handleChangeContent}
                value={content.value}
              />
              <Condition
                error={condition.error}
                label="condition"
                multiline={true}
                onChange={this.handleChangeCondition}
                value={condition.value}
              />
            </RowAlignStart>
          </LeftSection>

          <RightSection>
            <RadioButtons
              error={version.error}
              list={listOfVersion}
              onChange={this.handleChangeVersion}
              row={true}
              title="Version"
              value={version.value}
            />
          </RightSection>
        </ContentCard>
      </Card>
    )
  }
}

export default RuleDetail;