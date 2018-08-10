import styled, {css} from 'styled-components';

import Autocomplete from 'root/components/autocomplete';
import RenderInput from 'root/components/input';

const _margin = css`
  margin: 15px !important;
`;

const _widthField = css`
  flex: 1 1 220px;
`;

export const Wrap = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const Search = styled(Autocomplete)`
  ${_margin};
  ${_widthField};
`;

export const NewCampaign = styled(RenderInput)`  
  ${_margin};
  ${_widthField};
`;

export const Shrink = styled('span')`  
  flex: 1 1 50%;
`;

export const Overview = styled(RenderInput)`
  width: 100%;
  ${_margin};
`;