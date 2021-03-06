import styled, {css} from 'styled-components';

import RenderInput from 'root/components/input';
import RenderSelect from 'root/components/select';

import SaveIc from '@material-ui/icons/Edit';

const _margin = css`
  margin: 15px !important;
`;

const _widthField = css`
 flex: 1 1 250px;
`;

export const Wrap = styled('div')`
  flex-direction: column;
  width: 100%;
`;

export const Content = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Input = styled(RenderInput)`
  ${_margin};
  ${_widthField};
`;

export const Select = styled(RenderSelect)`
  ${_margin};
  ${_widthField};
`;

export const UserSubTitle = styled('header')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;