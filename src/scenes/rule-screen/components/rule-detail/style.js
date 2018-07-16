import styled from 'styled-components';

import RadioButtons from 'root/components/radio-buttons';
import RenderInput from 'root/components/input';
import RenderInputNumber from 'root/components/inmut-number';
import RenderSelect from 'root/components/select';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const Container = styled('div')`
  //margin: 20px 0 !important;
`;

const ContainerSmall = Container.withComponent(RenderInputNumber).extend`
  width: 90px;
`;

const Row = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const RowAlignCentre = Container.withComponent(Row).extend`
  align-items: center;
`;

export const RowAlignStart = Container.withComponent(Row).extend`
  align-items: flex-start;
`;

export const ContentCard = Container.withComponent(Row).extend`
  padding: 0 24px;
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

export const Action = Container.withComponent(RadioButtons).extend`
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
  padding-top: 20px;
`;

export const Content = styled(RenderInput)`
  flex: 2 1 auto;
  margin-right: 15px !important;
`;

export const Condition = styled(RenderInput)`
  flex: 1 1 auto;
`;