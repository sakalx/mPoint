import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import {
  Wrap,
} from './style';

class Ad extends React.PureComponent {
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
        <AppBar position='static'>
          <Tabs
            onChange={this.handleChangeTab}
            value={value}
            fullWidth
          >
            <Tab label='Create ad'/>
            <Tab label='Create ad unit'/>
          </Tabs>
        </AppBar>
        {value === 0 && <div>1</div>}
        {value === 1 && <div>2</div>}
      </Wrap>
    )
  }
}

export default Ad;