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
    type: {value: ''},
    percentage: {value: ''},
    content: {value: ''},
    condition: {value: ''},
    version: {value: ''},
    showOption: false,
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

  handleChangeType = type => {
    this.setState({type})
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
    console.log(555555);
    this.setState(state => ({showOption: !state.showOption}));
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

  renderExpandOptionBtn = () => {
    const {showOption} = this.state;

    return (
      <Tooltip title={showOption ? "Hide options" : "Show option"}>
        <ExpandButton
          onClick={this.handleShowOption}
          aria-expanded={showOption}
          aria-label="Toggle option"
        >
          <ExpandMoreIcon/>
        </ExpandButton>
      </Tooltip>
    )
  };

  render() {
    const {
      company,
      condition,
      content,
      percentage,
      action,
      ruleName,
      showOption,
      options,
      type,
      version,
    } = this.state;

    return (
      <Card>
        <CardHeader
          action={this.renderExpandOptionBtn()}
          title="Set of rules"
          subheader={
            company.value ? `${company.value} ${ruleName.value}` : 'New'
          }
        />

        <ContentCard>
          <Collapse in={showOption} timeout="auto" unmountOnExit>
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
                label="company"
                onChange={this.handleChangeCompany}
                suggestions={listOfCompanies}
                value={company.value}
              />
              <Autocomplete
                disabled={!company.value}
                label="ruleName"
                onChange={this.handleChangeRuleName}
                startAdornment={company.value && this.renderPrefixRuleName()}
                suggestions={listOfRuleNames}
                value={company.value ? ` ${ruleName.value}` : ruleName.value}
              />
              <Action
                list={listOfActions}
                onChange={this.handleChangeAction}
                row={true}
                title="Action"
                value={action.value}
              />
              <RuleType
                label="Type"
                list={listOfTypes}
                onChange={this.handleChangeType}
                value={type.value}
              />
              <Percentage
                label="Percentage"
                maxValue="50"
                onChange={this.handleChangePercentage}
                suffix="%"
                value={percentage.value}
              />
            </RowAlignCentre>
            <RowAlignStart>
              <Content
                label="content"
                multiline={true}
                onChange={this.handleChangeContent}
                value={content.value}
              />
              <Condition
                label="condition"
                multiline={true}
                onChange={this.handleChangeCondition}
                value={condition.value}
              />
            </RowAlignStart>
          </LeftSection>

          <RightSection>
            <RadioButtons
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