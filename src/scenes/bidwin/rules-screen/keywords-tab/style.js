import styled from 'styled-components';
import muiTheme from 'root/theme';

import MultipleSelect from 'components/multiple-select';

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

export const SelectKeywords = styled(MultipleSelect)`
  margin: ${spacingUnit} !important;
`;