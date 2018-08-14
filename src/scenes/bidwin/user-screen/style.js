import styled, {css} from 'styled-components';
import muiTheme from 'root/theme';

import Button from '@material-ui/core/Button';
import RenderInput from 'root/components/input';
import RenderSelect from 'root/components/select';

const _margin = css`
  margin: ${muiTheme.spacing.unit}px !important;
`;
const _widthField = css`
  width: 250px;
`;

export const Wrap = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(RenderInput)`
  ${_margin};
  ${_widthField};
`;

export const Select = styled(RenderSelect)`
  ${_margin};
  ${_widthField};
`;

export const Submit = styled(Button)`
  ${_margin};
  align-self: flex-end;
`;