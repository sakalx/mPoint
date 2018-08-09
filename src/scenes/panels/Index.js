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

const renderSummary = (title, subTitle) => (
  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
  <Summary>
    <Typography color='primary' variant='button'>
      {title}
    </Typography>
    <Fade in={!!subTitle} timeout={2000}>
      <Typography component='h3' variant='headline'>
        {subTitle}
      </Typography>
    </Fade>
  </Summary>
</ExpansionPanelSummary>
);

class Panels extends React.PureComponent {
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

  handleSetSummary = subTitle => {
    this.setState({...subTitle})
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
        {renderSummary('User', userName)}
          <ExpansionPanelDetails>
            <User setUserSummary={this.handleSetSummary}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
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
          elevation={5}
          expanded={expanded === 'ad'}
          onChange={this.handleChangePanel('ad')}
        >
        {renderSummary('Ad')}
          <ExpansionPanelDetails>
            <Ad/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          elevation={5}
          expanded={expanded === 'rules'}
          onChange={this.handleChangePanel('rules')}
        >
        {renderSummary('Rules')}
          <ExpansionPanelDetails>
            <Rules/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          elevation={5}
          expanded={expanded === 'admin'}
          onChange={this.handleChangePanel('admin')}
        >
        {renderSummary('Administration')} 
          <ExpansionPanelDetails>
            <Admin/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Wrap>
    );
  }
}

export default Panels;