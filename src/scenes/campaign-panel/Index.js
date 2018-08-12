import React from 'react';

import OverviewTab from './overview-tab';
import RuleTab from './rule-tab';

import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import OverviewIcon from '@material-ui/icons/Storage';
import RuleIcon from '@material-ui/icons/Settings';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import {
  Wrap,
} from './style';

class Campaign extends React.PureComponent {
  state = {
    value: 0,
    enabledRule: false,
  };

  handleChangeTab = (event, value) => {
    this.setState({value});
  };

  handleEnableRuleTab = enabledRule => {
    this.setState({enabledRule});
  };

  render() {
    const {enabledRule, value} = this.state;

    return (
      <Wrap>
        <AppBar position='static'>
          <Tabs
            onChange={this.handleChangeTab}
            value={value}
            fullWidth
          >
            <Tab icon={<OverviewIcon/>} label='Overview'/>
            <Tab disabled={!enabledRule} icon={<RuleIcon/>} label='Rule'/>
          </Tabs>
        </AppBar>
        <SwipeableViews index={value} onChangeIndex={this.handleChangeTab}>
          <OverviewTab
            changeTab={this.handleChangeTab}
            enableRuleTab={this.handleEnableRuleTab}
          />
          <RuleTab/>
        </SwipeableViews>
      </Wrap>
    );
  }
}

export default Campaign;