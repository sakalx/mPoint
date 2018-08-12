import styled, {css} from 'styled-components';
import muiTheme from 'root/theme';

import MultipleSelect from 'root/components/multiple-select';
import RadioButtons from 'root/components/radio-buttons';
import RenderSelect from 'root/components/select';
import SwitchesGroup from 'root/components/switches-group';

import Typography from '@material-ui/core/Typography';

const {palette} = muiTheme;

const _margin = css`
  margin: 15px !important;
`;

export const Wrap = styled('div')`
  padding-top: 30px;
  position: relative;
  width: 100%;
`;

export const Status = styled(SwitchesGroup)`
  position: absolute !important;
  right: 15px;
  top: -10px;
`;

export const LeftColumn = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const Main = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const ChangeType = styled(RadioButtons)`
  ${_margin};
`;

export const SelectKeywords = styled(MultipleSelect)`
  ${_margin};
`;

export const SelectGroupType = styled(RenderSelect)`
  ${_margin};
`;

export const PhoneScreen = styled('aside')`
  border: 1px solid #000;
  display: flex;
  height: 520px;
  margin: auto;
  max-width: 320px;
  padding: 5px;
  width: 100%;
`;

export const ShapeAd = styled('div')`
  background: ${palette.action.disabledBackground};
  margin: auto;
  padding: 5px;
  text-align: center;
  ${({size}) => `
    flex: 0 1 ${size[0]}px;
    height: ${size[1]}px;
  `}
`;

export const AdSubTitle = styled('header')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Description = styled(Typography)`
  margin: 15px !important;
`;