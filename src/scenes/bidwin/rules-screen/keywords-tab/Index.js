import React from 'react';

import {listOfKeyWords} from 'static/lists';

import Typography from '@material-ui/core/Typography';

import {
  CampaignName,
  CampaignTitle,
  SelectKeywords,
  Wrap,
} from './style';

class KeywordsTab extends React.PureComponent {
  state = {
    keywords: [],
  };

  render() {
    const {currentCampaign} = this.props;
    const {keywords} = this.state;

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

        <SelectKeywords
          disabled={status.disabled}
          id='select-keywords--rules'
          label='Keywords'
          list={listOfKeyWords}
          onChange={({target}) => this.setState({keywords: target.value})}
          value={keywords}
        />
      </Wrap>
    );
  }
}

export default KeywordsTab;