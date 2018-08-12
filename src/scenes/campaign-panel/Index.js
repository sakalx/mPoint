import React from 'react';

import OverviewTab from './overview-tab';
import RuleTab from './rule-tab';

import AppBar from '@material-ui/core/AppBar';
import OverviewIcon from '@material-ui/icons/SettingsPower';
import RuleIcon from '@material-ui/icons/Settings';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import {
  CampaignSubTitle,
  Description,
  Wrap,
} from './style';

class Campaign extends React.PureComponent {
  state = {
    value: 0,
    campaign: ''
  };

  handleChangeTab = (event, value) => {
    this.setState({value});
  };

  handleSetCampaign = campaign => {
    this.setState({campaign});
  };

  handleSave = (date, status = 'Enabled') => {
    const campaignSubTitle = () => (
      <CampaignSubTitle>
        <Typography color='textSecondary' variant='title'>
          {this.state.campaign}
        </Typography>
        <Description color='textSecondary' variant='body2'>{date}</Description>
        <Typography variant='caption'>{status}</Typography>
      </CampaignSubTitle>
    );

    this.props.handlePanel({campaignSubTitle});
  };

  render() {
    const {campaign, value} = this.state;

    return (
      <Wrap>
        <AppBar position='static'>
          <Tabs
            onChange={this.handleChangeTab}
            value={value}
            fullWidth
          >
            <Tab icon={<OverviewIcon/>} label='Overview'/>
            <Tab disabled={!campaign} icon={<RuleIcon/>} label='Rule'/>
          </Tabs>
        </AppBar>
        {value === 0 &&
        <OverviewTab
          changeTab={this.handleChangeTab}
          handleSave={this.handleSave}
          setCampaign={this.handleSetCampaign}
        />}
        {value === 1 &&
        <RuleTab handleSave={this.handleSave}/>
        }
      </Wrap>
    );
  }
}

export default Campaign;