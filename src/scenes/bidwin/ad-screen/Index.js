import React from 'react';

import NewAdTab from './new-ad-tab';
import NewAdUnitTab from './new-adunit-tab';
import CampaignRuleTab from './campaign-rule-tab';

import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';

import {
  Wrap,
} from './style';

class AdScreen extends React.PureComponent {
  state = {
    value: 0,
  };

  handleChangeTab = (event, value) => {
    this.setState({value});
  };

  render() {
    const {value} = this.state;

    return (
      <Wrap>
        <AppBar color='default' position='static'>
          <Tabs
            fullWidth
            indicatorColor='primary'
            onChange={this.handleChangeTab}
            textColor='primary'
            value={value}
          >
            <Tab label='Create ad'/>
            <Tab label='Create ad unit'/>
            <Tab label='Campaign rules'/>
          </Tabs>
        </AppBar>
        <SwipeableViews index={value} onChangeIndex={this.handleChangeTab}>
          <NewAdTab/>
          <NewAdUnitTab/>
          <CampaignRuleTab currentCampaign={this.props.currentCampaign}/>
        </SwipeableViews>
      </Wrap>
    );
  }
}

export default AdScreen;