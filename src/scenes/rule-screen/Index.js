import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import RuleDetail from 'root/scenes/rule-screen/components/rule-detail';

import {
  SubHeaderPanel,
  TitlePanel,
  Wrap,
} from './style';

class RuleScreen extends React.PureComponent {
  state = {

  };

  render() {

    return (
      <Wrap elevation={12}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" component="h1">
              Create & Edit rules
            </Typography>
          </Toolbar>
        </AppBar>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <TitlePanel>
              <Typography variant="title">Rule detail</Typography>
            </TitlePanel>
            <SubHeaderPanel>
              <Typography color="textSecondary" paragraph>cb0e9da3-3e80-4f09-bfb4-982c7ab657e</Typography>
            </SubHeaderPanel>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <RuleDetail/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Expansion Panel 2</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Wrap>
    )
  }
}

export default RuleScreen;