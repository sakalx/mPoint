import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {listOfCampaign} from 'static/lists';

import MenuButton from './menu-button';
import UserScreen from './user-screen';
import CampaignScreen from './campaign-screen';

import {
  Main,
  Menu,
  Screen,
} from './style';

class Bidwin extends React.Component {
  state = {
    currentCampaign: {
      value: listOfCampaign[0].label,
    },
  };

  handleSelectCampaign = value => {
    this.setState(({currentCampaign}) => ({
      currentCampaign: {
        ...currentCampaign,
        ...value,
      },
    }));
  };

  render() {
    const {currentCampaign} = this.state;

    return (
      <Router>
        <Main>
          <Menu>
            <MenuButton to='/user' label='Users / Agents'/>
            <MenuButton to='/campaign' label='Campaign Mgmt'/>
            <MenuButton to='/ad' label='Ad Mgr'/>
            <MenuButton to='/rule' label='Rules Mgr'/>
            <MenuButton to='/admin' label='Bidwin Administration'/>
          </Menu>

          <Screen>
            <Route path='/user' component={UserScreen}/>
            <Route path='/campaign' render={prop =>
              <CampaignScreen {...prop}
                              currentCampaign={currentCampaign}
                              selectCampaign={this.handleSelectCampaign}
              />}/>
            <Route path='/ad' render={prop =>
              <UserScreen {...prop} currentCampaign={currentCampaign}/>}/>
            <Route path='/rule' render={prop =>
              <UserScreen {...prop} currentCampaign={currentCampaign}/>}/>
            <Route path='/admin' component={UserScreen}/>
          </Screen>
        </Main>
      </Router>
    )
  }
}

export default Bidwin;