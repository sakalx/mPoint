import React from 'react';

import {listOfCampaign} from 'root/static/lists';

import SaveButton from 'root/components/save-button';

import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

import {
  NewCampaign,
  Overview,
  Search,
  SetRuleIcon,
  Shrink,
  Wrap,
  WrapButton,
} from './style';

class OverviewTab extends React.PureComponent {
  state = {
    searchCampaign: {
      helperText: 'If not found, add new instead',
      isFound: null,
      value: '',
    },
    newCampaign: {
      value: '',
    },
    overview: {
      isChanged: false,
      value: '',
    },
  };

  handleFindCampaign = (event, {newValue}) => {
    const isFound = listOfCampaign.some(({label}) => label === newValue);

    this.setState(({searchCampaign, overview}) => ({
        searchCampaign: {
          ...searchCampaign,
          isFound: isFound,
          value: newValue,
        },
        overview: {
          ...overview,
          isChanged: false,
        }
      })
    );
  };

  handleAddNewCampaign = ({target}) => {
    const value = target.value.trimStart();

    this.setState(({searchCampaign, newCampaign}) => ({
        newCampaign: {
          ...newCampaign,
          value,
        },
        searchCampaign: {
          ...searchCampaign,
          isFound: null,
          value: '',
        }
      })
    );
  };

  handleChangeOverview = ({target}) => {
    this.setState(({overview}) => ({
        overview: {
          ...overview,
          value: target.value,
          isChanged: true,
        }
      })
    );
  };

  handleSetRule = () => {
    this.props.changeTab(null, 1);
    this.props.setCampaign(this.state.newCampaign.value);
  };

  handleSave = () => {
    this.props.setCampaign(this.state.searchCampaign.value);
    setTimeout(this.props.handleSave, 0)
  };

  render() {
    const {searchCampaign, newCampaign, overview} = this.state;

    return (
      <div>
        <Wrap>
          <Search
            disabled={!!newCampaign.value}
            helperText={searchCampaign.isFound === false && searchCampaign.helperText}
            label='Campaign'
            onChange={this.handleFindCampaign}
            placeholder='Search'
            suggestions={listOfCampaign}
            value={searchCampaign.value}
          />
          <NewCampaign
            label='New campaign'
            onChange={this.handleAddNewCampaign}
            value={newCampaign.value}
          />
          <Shrink/>
          <Overview
            label='Overview'
            multiline={true}
            onChange={this.handleChangeOverview}
            value={overview.value}
          />
        </Wrap>
        <Zoom in={!!(newCampaign.value && overview.value)}>
          <WrapButton>
            <Button color='primary' variant='outlined' onClick={this.handleSetRule}>
              <SetRuleIcon/>
              Set Rule
            </Button>
          </WrapButton>
        </Zoom>
        <SaveButton
          callBack={this.handleSave}
          visible={overview.isChanged && searchCampaign.isFound}
        />
      </div>
    )
  }
}

export default OverviewTab;