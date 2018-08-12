import React from 'react';

import User from '../user-panel';
import Campaign from '../campaign-panel';
import Ad from '../ad-panel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Fade from '@material-ui/core/Fade';

import {
  AdIcon,
  CampaignIcon,
  Summary,
  SummarySubTitle,
  SummaryTitle,
  UserIcon,
  Wrap,
} from './style';


const renderSummary = (Icon, title, subTitle) => (
  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
    <Summary>
      {Icon && <Icon color='primary'/>}
      <SummaryTitle component='h2' color='primary' variant='button'>
        {title}
      </SummaryTitle>
      <Fade in={!!subTitle} timeout={2000}>
        <SummarySubTitle color='textSecondary' component='div' variant='title'>
          {subTitle ? subTitle() : <span/>}
        </SummarySubTitle>
      </Fade>
    </Summary>
  </ExpansionPanelSummary>
);

class Panels extends React.PureComponent {
  state = {
    expanded: 'campaign',
    userSubTitle: () => 'sakal',
    campaignSubTitle: null,
    adTypeSubTitle: null,
  };

  handleChangePanel = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handlePanel = state => {
    this.setState({...state})
  };

  renderExpansionPanel = ({
                            disabled = false,
                            expanded,
                            Icon,
                            Panel,
                            summarySubTitle,
                            summaryTitle,
                          }) => (
    <ExpansionPanel
      disabled={disabled}
      elevation={5}
      expanded={this.state.expanded === expanded}
      onChange={this.handleChangePanel(expanded)}
    >
      {renderSummary(Icon, summaryTitle, summarySubTitle)}
      <ExpansionPanelDetails>
        <Panel handlePanel={this.handlePanel}/>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );

  render() {
    const {userSubTitle, campaignSubTitle, adTypeSubTitle} = this.state;

    return (
      <Wrap>
        {this.renderExpansionPanel({
          expanded: 'user',
          Icon: UserIcon,
          summaryTitle: 'User',
          summarySubTitle: userSubTitle,
          Panel: User,
        })}
        {this.renderExpansionPanel({
          disabled: !userSubTitle,
          expanded: 'campaign',
          Icon: CampaignIcon,
          summaryTitle: 'Campaign',
          summarySubTitle: campaignSubTitle,
          Panel: Campaign,
        })}
        {this.renderExpansionPanel({
          disabled: !campaignSubTitle,
          Icon: AdIcon,
          expanded: 'ad',
          summaryTitle: 'Ad',
          summarySubTitle: adTypeSubTitle,
          Panel: Ad,
        })}
      </Wrap>
    );
  }
}

export default Panels;