import React from 'react';

import NewAdTab from './new-ad-tab';
import NewAdUnitTab from './';
import CampaignRuleTab from './';

import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

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
          <Tabs
            onChange={this.handleChangeTab}
            value={value}
            indicatorColor='primary'
            scrollable
            scrollButtons='on'
            textColor='primary'
          >
            <Tab label='Create ad'/>
            <Tab label='Create ad unit'/>
            <Tab label='Campaign rules'/>
          </Tabs>
        <SwipeableViews index={value} onChangeIndex={this.handleChangeTab}>
          <NewAdTab/>
          <h1>rtghb</h1>
          <h1>bfg</h1>
         {/* <NewAdTab/>
          <NewAdUnitTab/>
          <CampaignRuleTab/>*/}
        </SwipeableViews>
      </Wrap>
    );
  }
}

export default AdScreen;