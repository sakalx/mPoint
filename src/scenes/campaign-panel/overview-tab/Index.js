import React from 'react';

import {listOfCampaignDummy} from 'root/static/lists';

import CampaignList from 'root/scenes/campaign-list';

import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Collapse from '@material-ui/core/Collapse';

import {
  AddIcon,
  CurrentCampaign,
  NewCampaignInput,
  NewCampaign,
  Search,
  SetRuleIcon,
  Shrink,
  Top,
  SaveIcon,
  WrapButton,
  WrapOverview,
  ZoomButton,
  Overview,
} from './style';


const getSuggestions = listOfCampaignDummy.map(({name}) => ({label: name}));

class OverviewTab extends React.PureComponent {
  state = {
    currentCampaign: {
      value: '',
    },
    searchCampaign: {
      value: '',
      visible: true,
    },
    newCampaign: {
      value: '',
      visible: false,
    },
    overview: {
      isChanged: false,
      value: '',
    },
  };

  handleResetState = () => {
    const state = Object.entries(this.state).reduce((acc, next) => {
      acc[next[0]] = {...next[1], value: ''};
      return acc
    }, {});

    this.setState({...state});
  };

  handleFindCampaign = (event, {newValue}) => {
    const {enableRuleTab} = this.props;
    const campaign = listOfCampaignDummy.find(({name}) => name === newValue);
    // FIXME 🤬
    if (campaign) {
      this.setState(({currentCampaign, overview}) => ({
        currentCampaign: {
          ...currentCampaign,
          value: campaign.name,
        },
        overview: {
          ...overview,
          value: campaign.overview,
        },
      }));
      enableRuleTab(true);
    } else {
      this.handleResetState();
      enableRuleTab(false);
    }

    this.setState(({searchCampaign, overview}) => ({
        searchCampaign: {
          ...searchCampaign,
          value: newValue,
        },
        overview: {
          ...overview,
          isChanged: false,
        },
      })
    );
  };

  handleSetNewCampaign = ({target}) => {
    const value = target.value.trimStart();

    this.setState(({currentCampaign, newCampaign}) => ({
        newCampaign: {
          ...newCampaign,
          value,
        },
        currentCampaign: {
          ...currentCampaign,
          value,
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
        },
      })
    );
  };

  handleAddNew = () => {
    this.handleResetState();
    this.props.enableRuleTab(false);

    this.setState(({searchCampaign, newCampaign}) => ({
      newCampaign: {
        ...newCampaign,
        visible: true,
      },
      searchCampaign: {
        ...searchCampaign,
        visible: false,
      },
    }));
  };

  handleSetRule = () => {
    this.props.enableRuleTab(true);
    this.props.changeTab(null, 1);
  };

  handleSave = () => {
    this.setState(({searchCampaign, newCampaign, overview}) => ({
      overview: {
        ...overview,
        isChanged: false,
      },
    }));
    alert(`
    Changed overview is SAVED.
    
    p/s: So far native alert, later I'll change to custom alert 😍.
    `)
  };


  render() {
    const {currentCampaign, searchCampaign, newCampaign, overview} = this.state;

    const actionButtons = [{
      icon: <AddIcon/>,
      onClick: this.handleAddNew,
      show: !newCampaign.visible && !overview.isChanged,
      text: 'Add campaign',
    }, {
      disabled: !newCampaign.value || !overview.value,
      icon: <SetRuleIcon/>,
      onClick: this.handleSetRule,
      show: newCampaign.visible,
      text: 'Set rule',
    }, {
      icon: <SaveIcon/>,
      onClick: this.handleSave,
      show: searchCampaign.visible && overview.isChanged,
      text: 'Save',
    }];

    return (
      <section style={{textAlign: 'center'}}>
        <Collapse in={!!currentCampaign.value}>
          <CurrentCampaign color='textSecondary' variant='button'>
            {currentCampaign.value}
          </CurrentCampaign>
        </Collapse>
        <Top>
          <Slide direction='down' in={searchCampaign.visible}>
            <Search
              label='Search'
              onChange={this.handleFindCampaign}
              placeholder='Campaign'
              suggestions={getSuggestions}
              value={searchCampaign.value}
            />
          </Slide>
          {newCampaign.visible &&
          <NewCampaign>
            <NewCampaignInput
              label='New campaign'
              onChange={this.handleSetNewCampaign}
              value={newCampaign.value}
            />
            <Shrink/>
          </NewCampaign>
          }
          <WrapButton>
            {actionButtons.map((button, index) => (
              <ZoomButton
                delay={String(button.show)}
                in={button.show}
                key={String(index)}
                timeout={{enter: 225, exit: 195}}
                unmountOnExit
              >
                <Button
                  color='primary'
                  disabled={!!button.disabled}
                  onClick={button.onClick}
                  variant='outlined'
                >
                  {button.icon}{button.text}
                </Button>
              </ZoomButton>
            ))
            }
          </WrapButton>
        </Top>
        <WrapOverview in={!!currentCampaign.value}>
          <Overview
            label='Overview'
            multiline={true}
            onChange={this.handleChangeOverview}
            value={overview.value}
          />
        </WrapOverview>
        <CampaignList/>
      </section>
    )
  }
}

export default OverviewTab;