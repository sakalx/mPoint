import styled, {css} from 'styled-components';

import Autocomplete from 'root/components/autocomplete';
import RenderInput from 'root/components/input';

import SaveIc from '@material-ui/icons/Edit';

const _margin = css`
  margin: 15px !important;
`;

export const Wrap = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const Search = styled(Autocomplete)`
  ${_margin};
`;

export const NewCampaign = styled(RenderInput)`
  
  ${_margin};
`;

export const Overview = styled(RenderInput)`
  width: 100%;
  ${_margin};
`;

export const SaveIcon = styled(SaveIc)`
  margin-right: 15px;
  font-size: 20px !important;
`;