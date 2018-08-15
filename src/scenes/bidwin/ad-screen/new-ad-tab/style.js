import styled from 'styled-components';
import muiTheme from 'root/theme';

import RenderSelect from 'root/components/select';

const spacingUnit = `${muiTheme.spacing.unit}px`;

export const Col = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Row = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrap = Col.extend`
  margin: ${spacingUnit};
`;

export const Select = styled(RenderSelect)`
  align-self: flex-end; 
  margin: ${spacingUnit} !important;
  max-width: 250px;
  width: 100%;
`;

export const Shapes = Col.extend`
  margin: auto;
  max-width: 482px;
  width: 100%;
`;

export const RowShapes = Row.extend`
  justify-content: space-between;
  width: 100%;
`;

export const LeftShapes = Col.extend`
  flex: 1;
`;

export const RightShapes = Col.extend`
  align-items: flex-end;
  flex: 1;  
`;
console.log(muiTheme.palette);
export const AdShape = Row.withComponent('section').extend`
  ${({size}) => `
    height: ${size[1]}px;
    max-width: ${size[0]}px;
    width: 100%;
  `};
  align-items: center;
  background: ${muiTheme.palette.action.disabledBackground};
  justify-content: center;
  margin: ${spacingUnit};
  text-align: center;
`;

