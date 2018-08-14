import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import MenuButton from './menu-button';
import UserScreen from './user-screen';

import {
  Main,
  Menu,
  Screen,
} from './style';


class Bidwin extends React.Component {
  state = {
    currentCampaign: '',
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
            <Route path='/campaign' component={UserScreen}/>
            <Route path='/ad' render={(prop) => <UserScreen {...prop} currentCampaign={currentCampaign}/>}/>
            <Route path='/rule' render={(prop) => <UserScreen {...prop} currentCampaign={currentCampaign}/>}/>
            <Route path='/admin' component={UserScreen}/>
          </Screen>
        </Main>
      </Router>
    )
  }
}

export default Bidwin;