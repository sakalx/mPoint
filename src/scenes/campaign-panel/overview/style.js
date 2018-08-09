import styled, {css} from 'styled-components';

import Autocomplete from 'root/components/autocomplete';
import RenderInput from 'root/components/input';

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