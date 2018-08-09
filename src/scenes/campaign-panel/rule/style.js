import styled, {css} from 'styled-components';

import RenderInputNumber from 'root/components/inmut-number';
import RenderSelect from 'root/components/select';
import SwitchesGroup from 'root/components/switches-group';

import TextField from '@material-ui/core/TextField';

const _margin = css`
  margin: 15px !important;
  width: 200px;
`;

export const Wrap = styled('div')`
  padding-top: 15px;
  position: relative;
`;

export const Row = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const Status = styled(SwitchesGroup)`
  position: absolute !important;
  right: 15px;
  top: 0;
`;

export const Type = styled(RenderSelect)`
  ${_margin};
`;

export const Networks = styled(RenderSelect)`
  ${_margin};
`;

export const Budget = styled(RenderInputNumber)`
  ${_margin};
`;

export const Date = styled(TextField)`
  ${_margin};
`;
