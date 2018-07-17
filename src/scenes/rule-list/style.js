import styled from 'styled-components';
import muiTheme from 'root/theme';

import RenderSelect from 'root/components/select';

import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const Wrap = styled(Paper)`
  overflow-x: auto;
  overflow-y: hidden;
`;

export const RowTable = styled(TableRow)`
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
  padding: 0 10px  !important;
  vertical-align: baseline !important;
`;


export const EmptySpace = styled(TableRow)`
  ${props => `
    height: calc(48px * ${props['empty-rows']}) !important;
  `};
`;

export const SelectOperator = styled(RenderSelect)`
  width: 115px;
`;
