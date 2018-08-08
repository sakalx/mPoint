import React from 'react';

import User from '../user-panel';
import Campaign from '../campaign-panel';
import Ad from '../ad-panel';
import Rules from '../rules-panel';
import Admin from '../admin-panel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import {
  Summary,
  Wrap,
} from './style';

class Panels extends React.Component {
  state = {
    expanded: 'campaign',
    userName: '',
    campaignName: '',
  };

  handleChangePanel = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleSetSummary = name => {
    this.setState({expanded: null, ...name})
  };

  render() {
    const {expanded, userName, campaignName} = this.state;

    return (
      <Wrap>
        <ExpansionPanel
          elevation={5}
          expanded={expanded === 'user'}
          onChange={this.handleChangePanel('user')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Summary>
              <Typography color='primary' variant='button'>
                User
              </Typography>
              <Fade in={!!userName} timeout={2000}>
                <Typography color='textSecondary' component='h3' variant='title'>
                  {userName}
                </Typography>
              </Fade>
            </Summary>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <User setUserSummary={this.handleSetSummary}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          elevation={5}
          expanded={expanded === 'campaign'}
          onChange={this.handleChangePanel('campaign')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Summary>
              <Typography color='primary' variant='button'>
                Campaign manager
              </Typography>
              <Fade in={!!campaignName} timeout={2000}>
                <Typography color='textSecondary' component='h3' variant='title'>
                  {campaignName}
                </Typography>
              </Fade>
            </Summary>

          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Campaign setCampaignSummary={this.handleSetSummary}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          elevation={5}
          expanded={expanded === 'ad'}
          onChange={this.handleChangePanel('ad')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Ad manager</Typography>
            <Typography>

            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Ad/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          elevation={5}
          expanded={expanded === 'rules'}
          onChange={this.handleChangePanel('rules')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Rules manager</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Rules/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          elevation={5}
          expanded={expanded === 'admin'}
          onChange={this.handleChangePanel('admin')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Administration</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Admin/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Wrap>
    );
  }
}

export default Panels;