import styled, {css} from 'styled-components';

import Autocomplete from 'root/components/autocomplete';
import RenderInput from 'root/components/input';

import AddIco from '@material-ui/icons/Add';
import Collapse from '@material-ui/core/Collapse';
import SaveIco from '@material-ui/icons/Save';
import SetRuleIco from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

const _margin = css`
  margin: 15px !important;
`;

const _widthField = css`
  flex: 1 1 220px;
`;

const _icon = css`
  font-size: 20px !important;
  margin-right: 15px;
`;

export const Top = styled('div')`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2000;
`;

export const WrapButton = styled('div')`
  height: 1px;
  position: relative;
  text-align: center;
  width: 200px;
`;

export const ZoomButton = styled(Zoom)`
  ${({delay}) => delay === 'true'
    ? `transition-delay: 195ms !important;`
    : `transition-delay: 0 !important;`
  }
`;

export const CurrentCampaign = styled(Typography)`
  ${_margin};
  ${_widthField};
`;

export const Search = styled(Autocomplete)`
  ${_margin};
  ${_widthField};
`;

export const NewCampaign = styled('section')`  
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  width: 100%;
`;
export const NewCampaignInput = styled(RenderInput)`  
  ${_margin};
  ${_widthField};
`;

export const Shrink = styled('span')`  
  width: 200px;
`;

export const WrapOverview = styled(Collapse)`
  ${_margin};
`;

export const Overview = styled(RenderInput)`
  width: 100%;
`;

export const SetRuleIcon = styled(SetRuleIco)`
  ${_icon};
`;

export const AddIcon = styled(AddIco)`
  ${_icon};
  
`;export const SaveIcon = styled(SaveIco)`
  ${_icon};
`;