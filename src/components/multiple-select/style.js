import styled from 'styled-components';
import muiTheme from 'root/theme';

import Chip from '@material-ui/core/Chip';

export const Chips = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const Unit = styled(Chip)`
  margin: ${muiTheme.spacing.unit / 4}px;
`;