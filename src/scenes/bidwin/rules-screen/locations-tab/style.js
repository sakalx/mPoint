import styled from 'styled-components';
import muiTheme from 'root/theme';

import RenderSelect from 'components/select';

import Typography from '@material-ui/core/Typography';

const spacingUnit = `${muiTheme.spacing.unit}px`;

export const Wrap = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const CampaignName = styled('section')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: ${spacingUnit} !important;
`;

export const CampaignTitle = styled(Typography)`
  margin: ${spacingUnit} !important;
`;

export const Select = styled(RenderSelect)`
  margin: ${spacingUnit} !important;
  width: 250px;
`;