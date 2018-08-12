import styled from 'styled-components';
import muiTheme from 'root/theme';

import Typography from '@material-ui/core/Typography';

export const Wrap = styled('div')`
  background-color: ${muiTheme.palette.background.paper};  
  flex-grow: 1;
`;

export const CampaignSubTitle = styled('header')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Description = styled(Typography)`
  margin: 15px !important;
`;