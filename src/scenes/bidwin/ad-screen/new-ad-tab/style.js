import styled from 'styled-components';
import muiTheme from 'root/theme';

import RenderSelect from 'root/components/select';

const spacingUnit = `${muiTheme.spacing.unit}px`;

const _coll = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Row = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrap = _coll.extend`
  margin: ${spacingUnit};
`;

export const Select = styled(RenderSelect)`
  margin: ${spacingUnit} !important;
  width: 250px;
`;

export const Shapes = _coll.extend`
  margin: auto;
  max-width: 482px;
  width: 100%;
`;

export const RowShapes = Row.extend`
  justify-content: space-between;
  width: 100%;
`;

export const LeftShapes = _coll.extend`
  flex: 1;
`;

export const RightShapes = _coll.extend`
  align-items: flex-end;
  flex: 1;  
`;

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