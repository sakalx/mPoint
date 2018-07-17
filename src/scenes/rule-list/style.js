import styled from 'styled-components';
import muiTheme from 'root/theme';

import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const Wrap = styled(Paper)`
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Head = styled(TableHead)`
  background-color:  ${muiTheme.palette.background.default};
`;

export const RowTable = styled(TableRow)`
  &:nth-of-type(even) {
      background-color: ${muiTheme.palette.background.default};
    };
`;
