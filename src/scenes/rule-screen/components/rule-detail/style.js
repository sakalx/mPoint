import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

export const Wrap = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const SectionCompany = styled('div')`
  z-index: 1;
`;

export const PrefixRuleName = styled(Typography)`
  display: flex !important;
  align-items: center;
`;