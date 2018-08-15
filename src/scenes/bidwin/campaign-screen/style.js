import styled from 'styled-components';
import muiTheme from 'root/theme';

import RenderInput from 'root/components/input';
import RenderSelect from 'root/components/select';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const spacingUnit = `${muiTheme.spacing.unit}px`;

export const Wrap = styled('div')`
  display: flex;
  flex-direction: column;
  margin: ${spacingUnit};
`;

export const Row = styled('div')`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Input = styled(RenderInput)`
  margin: ${spacingUnit} !important;
  flex: 1;
`;

export const SearchButton = styled(Button)`
  margin: ${spacingUnit} !important;
`;

export const WrapCampaignBtn = Row.extend`
  justify-content: center;
`;

export const CampaignButton = styled(Button)`
  margin: ${spacingUnit} !important;
  width: 170px;
`;

export const Select = styled(RenderSelect)`
  align-self: flex-end;
  margin: ${spacingUnit} !important;
  width: 250px;
`;

export const Overview = styled(Paper)`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  width: 100%;
`;

export const OverviewBar = styled('header')`
  background: ${muiTheme.palette.action.disabledBackground};
  padding: ${spacingUnit};
  width: 100%;
`;

export const OverviewText = styled(Typography)`
  flex: 1;
`;

export const OverviewButton = styled(Button)`
  margin: ${spacingUnit} !important;
`;