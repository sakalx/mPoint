import styled, {css} from 'styled-components';
import muiTheme from 'root/theme';

import RenderInput from 'root/components/input';
import RenderSelect from 'root/components/select';

import Button from '@material-ui/core/Button';

const spacingUnit = `${muiTheme.spacing.unit}px`;

const _widthField = css`
  width: 250px;
`;

export const Wrap = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(RenderInput)`
  margin: ${spacingUnit} !important;
  ${_widthField};
`;

export const Select = styled(RenderSelect)`
  margin: ${spacingUnit} !important;
  ${_widthField};
`;

export const Submit = styled(Button)`
  margin: ${spacingUnit} !important;
  align-self: flex-end;
`;