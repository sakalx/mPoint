import React from 'react';

import {listOfCampaignType, listOfCampaignNet} from 'static/lists';

import Typography from '@material-ui/core/Typography';

import {
  Budget,
  CampaignName,
  CampaignTitle,
  Select,
  SelectDate,
  Status,
  Wrap,
  WrapSelectDate,
} from './style';

class CampaignRuleTab extends React.PureComponent {
  state = {
    budget: {
      value: 0,
    },
    status: {
      enabled: true,
    },
    type: {
      value: '',
    },
    network: {
      value: '',
    },
    startDate: {
      value: new Date().toISOString().split('T')[0],
    },
    endDate: {
      value: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0],
    },
    errorDate: false,
  };

  handleChangeState = (value, prop) => {
    this.setState(state => ({
      [prop]: {
        ...state[prop],
        ...value,
      },
    }));
  };

  handleChangeBudget = ({target}) => {
    const value = Number(target.value);

    this.setState(({budget}) => ({
        budget: {
          ...budget,
          value: value < 0 ? ~value : value,
        }
      })
    );
  };

  handleChangeStatus = label => ({target}) => {
    this.setState(({status}) => ({
        status: {
          ...status,
          [label]: target.checked,
        },
      })
    );
  };

  handleSetDate = ({value}, prop) => {
    const validRangeDate = () =>
      (+new Date(this.state.endDate.value) - +new Date(this.state.startDate.value)) > 0;

    this.setState(state => ({
        [prop]: {
          ...state[prop],
          value,
        },
      }), () => validRangeDate()
      ? this.setState({errorDate: false})
      : this.setState({errorDate: true})
    );
  };

  renderDateField = ({label, value}) => (
    <SelectDate
      defaultValue={value}
      disabled={!this.state.status.enabled}
      error={this.state.errorDate}
      label={label}
      onChange={({target}) => this.handleSetDate(target, label)}
      type='date'
      InputLabelProps={{
        shrink: true,
      }}
    />
  );

  render() {
    const {currentCampaign} = this.props;
    const {budget, endDate, network, startDate, status, type} = this.state;

    return (
      <Wrap>
        <CampaignName>
          <Typography variant='subheading'>
            Campaign name:
          </Typography>
          <CampaignTitle variant='title' color={status.enabled ? 'default' : 'textSecondary'}>
            {currentCampaign.value}
          </CampaignTitle>
        </CampaignName>
        <Budget
          disabled={!status.enabled}
          label='Budget'
          length={5}
          onChange={this.handleChangeBudget}
          suffix='$'
          value={budget.value}
        />
        <Status
          label={status.enabled ? 'Enabled' : 'Disabled'}
          onChange={this.handleChangeStatus}
          switches={status}
          title='Status'
        />
        <Select
          disabled={!status.enabled}
          label='Campaign type'
          list={listOfCampaignType}
          onChange={value => this.handleChangeState(value, 'type')}
          value={type.value}
        />
        <Select
          disabled={!status.enabled}
          label='Networks'
          list={listOfCampaignNet}
          onChange={value => this.handleChangeState(value, 'network')}
          value={network.value}
        />
        <WrapSelectDate noValidate>
          {this.renderDateField({label: 'startDate', value: startDate.value})}
          {this.renderDateField({label: 'endDate', value: endDate.value})}
        </WrapSelectDate>
      </Wrap>
    );
  }
}

export default CampaignRuleTab;