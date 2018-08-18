import React from 'react';

import KeywordsTab from './keywords-tab';
import LocationsTab from './locations-tab';
import SettingsTab from './settings-tab';

import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import {
  SaveButton,
  Wrap,
} from './style';

class RulesScreen extends React.PureComponent {
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
            <Tab label='Keywords'/>
            <Tab label='Locations'/>
            <Tab label='Settings'/>
          </Tabs>
        </AppBar>
        <SwipeableViews index={value} onChangeIndex={this.handleChangeTab}>
          <KeywordsTab currentCampaign={this.props.currentCampaign}/>
          <LocationsTab currentCampaign={this.props.currentCampaign}/>
          <SettingsTab currentCampaign={this.props.currentCampaign}/>
        </SwipeableViews>

        <SaveButton>
          <Button color='primary' variant='contained'>
            Save
          </Button>
        </SaveButton>
      </Wrap>
    );
  }
}

export default RulesScreen;