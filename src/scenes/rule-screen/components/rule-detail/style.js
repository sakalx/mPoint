import styled from 'styled-components';


import Typography from '@material-ui/core/Typography';

export const Wrap = styled('div')`
 // align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const LeftSection = styled('div')`
  flex: 1 1 65%;
`;

export const Company = styled('div')`
  flex-basis: 250px;
  z-index: 1;
`;

export const RuleName = styled('div')`
  flex-basis: 250px;
`;

export const RightSection = styled('div')`
   flex: 1 1 0;
   padding: 0 25px;
`;

export const PrefixRuleName = styled(Typography)`
  display: flex !important;
  align-items: center;
`;