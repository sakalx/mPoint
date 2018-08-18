import styled from 'styled-components';
import muiTheme from 'root/theme';

const spacingUnit = `${muiTheme.spacing.unit}px`;

export const Wrap = styled('div')`
  background-color: ${muiTheme.palette.background.paper};  
  flex-grow: 1;
  height: 100%;
  width: 100%;
`;

export const SaveButton = styled('div')`
  margin: ${spacingUnit};
  text-align: right;
`;