import React from 'react';

import {listOfCampaignType, listOfCampaignNet} from 'root/static/lists';

import {
  Budget,
  Date,
  Networks,
  Row,
  Status,
  Type,
  Wrap,
} from './style';

class CampaignRule extends React.PureComponent {
  state = {
    budget: {
      error: false,
      value: 0,
    },
    status: {
      enabled: true,
    },
    type: {
      error: false,
      value: '',
    },
    network: {
      error: false,
      value: '',
    },
    startDate: {
      error: false,
      value: '2017-05-24',
    },
    endDate: {
      error: false,
      value: '2017-05-25',
    },

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

  handleSwitchStatus = label => ({target}) => {
    this.setState(({status}) => ({
        status: {
          ...status,
          [label]: target.checked,
        }
      })
    );
  };

  _setState = (key, value) => {
    this.setState(state => ({
        [key]: {
          ...state[key],
          value,
        }
      })
    )
  };

  render() {
    const {
      budget, status, type, network, startDate, endDate,
    } = this.state;

    return (
      <Wrap>
        <Status
          onChange={this.handleSwitchStatus}
          switches={status}
          label={status.enabled ? 'Enabled' : 'Disabled'}
        />
        <Row>
          <Type
            disabled={!status.enabled}
            error={type.error}
            label='Campaign type'
            list={listOfCampaignType}
            onChange={({value}) => this._setState('type', value)}
            value={type.value}
          />
          <Networks
            disabled={!status.enabled}
            error={network.error}
            label='Networks'
            list={listOfCampaignNet}
            onChange={({value}) => this._setState('network', value)}
            value={network.value}
          />
          <Budget
            disabled={!status.enabled}
            error={budget.error}
            label='Budget'
            length={5}
            onChange={this.handleChangeBudget}
            suffix='$'
            value={budget.value}
          />
        </Row>

        <form noValidate>
          <Date
            defaultValue={startDate.value}
            disabled={!status.enabled}
            label='Start date'
            onChange={({target}) => this._setState('startDate', target.value)}
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Date
            defaultValue={endDate.value}
            disabled={!status.enabled}
            label='End date'
            onChange={({target}) => this._setState('endDate', target.value)}
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>

      </Wrap>
    )
  }
}

export default CampaignRule;