import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';


export const Wrap = styled(Paper)`
  margin: 15px;
  padding: 5px;
  min-height: 95vh;
`;

export const TitlePanel = styled('section')`
  flex-basis: 25%;
`;

export const SubHeaderPanel = styled('div')`
  flex-basis: 65%;
`;