import styled from 'styled-components';
import muiTheme from 'root/theme';

import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const Wrap = styled(Paper)`
  margin: 5px auto;
  overflow-x: auto;
  width: 99%;
`;

export const RowTable = styled(TableRow)`
  cursor: pointer;
  &:nth-of-type(even) {
    background-color: ${muiTheme.palette.background.default};
  };
  &:nth-of-type(1) {
   ${({error}) => error === 'true' && `
       border-bottom: 2px solid ${muiTheme.palette.error.main};
    `}
  };
`;

export const Cell = styled(TableCell)`
  ${({enabled}) => enabled === 'true'
    ? `color: ${muiTheme.palette.text.primary} !important;`
    : `color: ${muiTheme.palette.text.disabled} !important;`
  };
`;

export const EmptySpace = styled(TableRow)`
  ${props => `
    height: calc(48px * ${props['empty-rows']}) !important;
  `};
`;