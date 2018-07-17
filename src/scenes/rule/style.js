import styled from 'styled-components';

import RadioButtons from 'root/components/radio-buttons';
import RenderInput from 'root/components/input';
import RenderInputNumber from 'root/components/inmut-number';
import RenderSelect from 'root/components/select';
import Card from '@material-ui/core/Card';


import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const ContainerSmall = styled('div')`
  width: 90px;
`;

const Row = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const WrapCard = styled(Card)`
  margin: 15px;
  overflow: visible !important;
`;

export const RowAlignCentre = Row.extend`
  align-items: center;
`;

export const RowAlignStart = Row.extend`
  align-items: flex-start;
`;

export const ContentCard = Row.extend`
  padding: 0 24px 15px;
`;

export const ExpandButton = styled(IconButton)`
  transition: all .3s ease-out !important;
  transform: rotate(0deg);
  ${props => props['aria-expanded'] && `
    transform: rotate(180deg);
  `};
   margin-left: 15px !important;
`;

export const LeftSection = styled('div')`
  align-self: flex-start;
  flex: 1 1 70%;
`;

export const PrefixRuleName = styled(Typography)`
  display: flex !important;
  align-items: center;
`;

export const Action = styled(RadioButtons)`
  margin-top: 16px !important;
  margin-bottom: -10px !important;
`;

export const Percentage = ContainerSmall.withComponent(RenderInputNumber).extend`
  margin-top: 16px !important;
  margin-bottom: 8px !important;
`;

export const RuleType = ContainerSmall.withComponent(RenderSelect);

export const RightSection = styled('div')`
  flex: 1 1 0;
  padding-left: 5%;
  padding-top: 15px;
`;

export const Content = styled(RenderInput)`
  flex: 2 1 auto;
  margin-right: 15px !important;
`;

export const Condition = styled(RenderInput)`
  flex: 1 1 auto;
`;

export const AddButtonWrap = styled('div')`
  position: relative;
`;

export const AddRule = styled(Button)`
  position: absolute !important;
  right: 24px;
  bottom: 5px;
`;