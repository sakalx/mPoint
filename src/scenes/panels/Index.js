import React from 'react';

import User from '../user-panel';
import Campaign from '../campaign-panel';
import Ad from '../ad-panel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import {
  Summary,
  SummarySubTitle,
  Wrap,
} from './style';

const renderSummary = (title, subTitle) => (
  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
    <Summary>
      <Typography color='primary' variant='button'>
        {title}
      </Typography>
      <Fade in={!!subTitle} timeout={2000}>
        <SummarySubTitle color='textSecondary' component='h3' variant='title'>
          {subTitle}
        </SummarySubTitle>
      </Fade>
    </Summary>
  </ExpansionPanelSummary>
);

class Panels extends React.PureComponent {
  state = {
    expanded: 'ad',
    userName: 'ss',
    campaignName: 'cc',
    adType: '',
  };

  handleChangePanel = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleSetSummary = subTitle => {
    this.setState({...subTitle})
  };

  render() {
    const {expanded, userName, campaignName, adType} = this.state;

    return (
      <Wrap>
        <ExpansionPanel
          elevation={5}
          expanded={expanded === 'user'}
          onChange={this.handleChangePanel('user')}
        >
          {renderSummary('User', userName)}
          <ExpansionPanelDetails>
            <User setUserSummary={this.handleSetSummary}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          disabled={!userName}
          elevation={5}
          expanded={expanded === 'campaign'}
          onChange={this.handleChangePanel('campaign')}
        >
          {renderSummary('Campaign', campaignName)}
          <ExpansionPanelDetails>
            <Campaign setCampaignSummary={this.handleSetSummary}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          disabled={!campaignName}
          elevation={5}
          expanded={expanded === 'ad'}
          onChange={this.handleChangePanel('ad')}
        >
          {renderSummary('Ad', adType)}
          <ExpansionPanelDetails>
            <Ad setAdSummary={this.handleSetSummary}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Wrap>
    );
  }
}

export default Panels;