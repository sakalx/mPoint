import React from 'react';

import CampaignOverview from './overview';
import CampaignRule from './rule';

import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import {
  Wrap,
} from './style';

class Campaign extends React.PureComponent {
  state = {
    value: 1,
  };

  handleChangeTab = (event, value) => {
    this.setState({value});
  };

  render() {
    const {setCampaignSummary} = this.props;
    const {value} = this.state;

    return (
      <Wrap>
        <AppBar position='static'>
          <Tabs
            onChange={this.handleChangeTab}
            value={value}
            fullWidth
          >
            <Tab label='Overview'/>
            <Tab label='Rule'/>
          </Tabs>
        </AppBar>
        {value === 0 && <CampaignOverview setCampaignSummary={setCampaignSummary}/>}
        {value === 1 && <CampaignRule/>}
      </Wrap>
    );
  }
}

export default Campaign;