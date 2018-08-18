import styled, {css} from 'styled-components';
import muiTheme from 'root/theme';

import MultipleSelect from 'components/multiple-select';
import RenderInput from 'components/input';
import RenderSelect from 'components/select';
import SwitchesGroup from 'components/switches-group';

const spacingUnit = `${muiTheme.spacing.unit}px`;

const _field = css`
  align-self: flex-start;
  margin: ${spacingUnit} !important;
  max-width: 250px;
  width: 100%;
`;

export const Row = styled('div')`
  align-items: center;
  display: flex;
`;

export const Wrap = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(RenderInput)`
  ${_field};
`;

export const SelectKeywords = styled(MultipleSelect)`
  margin: ${spacingUnit} !important;
`;

export const AdShape = styled('section')`
  align-items: center;
  background: ${muiTheme.palette.action.disabledBackground};
  display: flex;
  height: 90px;
  justify-content: center;
  margin: ${spacingUnit};
  width: 120px;
`;

export const Status = styled(SwitchesGroup)`
`;

export const Select = styled(RenderSelect)`
  ${_field};
`;