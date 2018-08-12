import styled, {css} from 'styled-components';

import Autocomplete from 'root/components/autocomplete';
import RenderInput from 'root/components/input';

import SetRuleIco from '@material-ui/icons/Settings';

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

export const WrapButton = styled('div')`
  text-align: right;
  margin: 15px;
`;

export const SetRuleIcon = styled(SetRuleIco)`
  font-size: 20px;
  margin-right: 15px;
`;