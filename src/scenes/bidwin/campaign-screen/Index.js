import React from 'react';

import {listOfCampaign} from 'static/lists';

import Typography from '@material-ui/core/Typography';

import {
  CampaignButton,
  Input,
  Overview,
  OverviewBar,
  OverviewButton,
  OverviewText,
  Row,
  SearchButton,
  Select,
  Wrap,
  WrapCampaignBtn,
} from './style';

class CampaignScreen extends React.PureComponent {
  state = {
    searchCampaign: {
      value: '',
    },
  };

  handleChangeState = ({value}, stateProp) => {
    this.setState({
      [stateProp]: {
        error: false,
        value: value.trimStart(),
      }
    })
  };


  render() {
    const {currentCampaign, selectCampaign} = this.props;
    const {searchCampaign} = this.state;

    return (
      <Wrap>
        <Row>
          <Input
            label='searchCampaign'
            onChange={({target}) => this.handleChangeState(target, 'searchCampaign')}
            value={searchCampaign.value}
          />
          <SearchButton variant='outlined'>
            Search
          </SearchButton>
        </Row>
        <WrapCampaignBtn>
          <CampaignButton color='primary' variant='contained'>
            Video campaigns
          </CampaignButton>
          <CampaignButton color='primary' variant='contained'>
            New campaign
          </CampaignButton>
        </WrapCampaignBtn>
        <Select
          label='Current Campaign'
          list={listOfCampaign}
          onChange={selectCampaign}
          value={currentCampaign.value}
        />
        <Overview elevation={8}>
          <OverviewBar>
            <Typography color='textSecondary' variant='title'>
              Campaign overview
            </Typography>
          </OverviewBar>
          <OverviewText/>
          <Row>
            <OverviewButton color='primary' variant='outlined'>
              Done
            </OverviewButton>
            <OverviewButton>
              Cancel
            </OverviewButton>
          </Row>
        </Overview>
      </Wrap>
    )
  }
}

export default CampaignScreen;