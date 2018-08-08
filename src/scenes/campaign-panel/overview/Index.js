import React from 'react';
import {isEmail} from "root/helpers/validator";

import {SaveButton} from "root/scenes/user-panel/style";
import {listOfCampaign} from 'root/static/lists';

import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

import {
  SaveIcon,
  Search,
  Wrap,
  Overview,
  NewCampaign,
} from './style';

class CampaignOverview extends React.Component {
  state = {
    searchCampaign: {
      error: false,
      errorMsg: 'Not found, add new instead',
      value: '',
    },
    newCampaign: {
      error: false,
      value: '',
    },
    overview: {
      error: false,
      value: '',
      isChanged: false,
    },
  };

  handleChangeCampaign = (event, {newValue}) => {
    this.setState(({searchCampaign}) => ({
        searchCampaign: {
          ...searchCampaign,
          error: false,
          value: newValue,
        }
      })
    );
  };

  handleAddNewCampaign = ({target}) => {
    this.setState(({searchCampaign, newCampaign}) => ({
        newCampaign: {
          ...newCampaign,
          error: false,
          value: target.value,
        },
        searchCampaign: {
          ...searchCampaign,
          error: false,
          value: '',
        }
      })
    );
  };

  handleChangeOverview = ({target}) => {
    this.setState(({overview}) => ({
        overview: {
          ...overview,
          error: false,
          value: target.value,
          isChanged: true,
        }
      })
    );
  };

  handleSave = () => {
    const {searchCampaign, newCampaign} = this.state;
    let campaignName = null;

    if (searchCampaign.value) {
      const isFound = listOfCampaign.some(({label}) => label === searchCampaign.value);

      !isFound
        ? this.setState({searchCampaign: {...searchCampaign, error: true}})
        : campaignName = searchCampaign.value;

    } else {
      newCampaign.value.length < 3
        ? this.setState({newCampaign: {...newCampaign, error: true}})
        : campaignName = newCampaign.value;
    }

    campaignName &&
    this.props.setCampaignSummary({campaignName});
  };

  render() {
    const {searchCampaign, newCampaign, overview} = this.state;
    const showSaveButton = searchCampaign.value || newCampaign.value;

    return (
      <div>
        <Wrap>
          <Search
            disabled={!!newCampaign.value}
            error={searchCampaign.error}
            helperText={searchCampaign.error && searchCampaign.errorMsg}
            label='Campaign'
            onChange={this.handleChangeCampaign}
            placeholder='Search'
            suggestions={listOfCampaign}
            value={searchCampaign.value}
          />
          <NewCampaign
            error={newCampaign.error}
            label='New campaign'
            onChange={this.handleAddNewCampaign}
            value={newCampaign.value}
          />
          <Overview
            error={overview.error}
            label='Overview'
            multiline={true}
            onChange={this.handleChangeOverview}
            value={overview.value}
          />
        </Wrap>

        <Zoom in={!!showSaveButton}>
          <SaveButton>
            <Button color='primary' onClick={this.handleSave} variant='outlined'>
              <SaveIcon/>
              Save
            </Button>
          </SaveButton>
        </Zoom>
      </div>
    )
  }
}

export default CampaignOverview;