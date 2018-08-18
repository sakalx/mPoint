import React from 'react';

import {listOfLocation} from 'static/lists';

import Typography from '@material-ui/core/Typography';

import {
  CampaignName,
  CampaignTitle,
  Select,
  Wrap,
} from './style';

class LocationsTab extends React.PureComponent {
  state = {
    locations: {
      value: '',
    }
  };

  handleChangeState = (value, prop) => {
    this.setState(state => ({
      [prop]: {
        ...state[prop],
        ...value,
      },
    }));
  };

  render() {
    const {currentCampaign} = this.props;
    const {locations} = this.state;

    return (
      <Wrap>
        <CampaignName>
          <Typography variant='subheading'>
            Campaign name:
          </Typography>
          <CampaignTitle variant='title'>
            {currentCampaign.value}
          </CampaignTitle>
        </CampaignName>

        <Select
          label='Locations'
          list={listOfLocation}
          onChange={value => this.handleChangeState(value, 'locations')}
          value={locations.value}
        />
      </Wrap>
    );
  }
}

export default LocationsTab;