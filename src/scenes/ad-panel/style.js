import styled, {css} from 'styled-components';
import muiTheme from 'root/theme';

import MultipleSelect from 'root/components/multiple-select';
import RadioButtons from 'root/components/radio-buttons';
import RenderSelect from 'root/components/select';
import SwitchesGroup from 'root/components/switches-group';

import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

const {palette} = muiTheme;

const _margin = css`
  margin: 15px !important;
`;

export const Wrap = styled('div')`
  //padding-top: 30px;
  position: relative;
  width: 100%;
`;

export const Status = styled(SwitchesGroup)`
  position: absolute !important;
  right: 15px;
  top: -10px;
`;

export const Content = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const Main = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 30px 50px 50px 15px;
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
  //border: 1px solid #000;
  display: flex;
  height: 425px;
  margin: auto;
  max-width: 250px;
  padding: 15px;
  position: relative;
  width: 100%;
`;

export const SmartPhoneIcon = styled(SvgIcon)`
  font-size: 555px !important;
  position: absolute;
  top: -50px;
  left: -11px;
`;

export const ShapeAd = styled('section')`
  ${({size}) => {
    const y = ((size[1] * 100 / 640) * 425)/100;
    const x = ((size[0] * 100 / 360) * 250)/100; 
    
    return `
      height: ${y}px;
      width: ${x}px;
    `
  }};
  align-items: center;
  background: ${palette.action.disabledBackground};
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 100%;
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