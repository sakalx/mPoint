import styled, {css} from 'styled-components';
import muiTheme from 'root/theme';

import RenderInput from 'components/input';
import RenderInputNumber from 'root/components/inmut-number';
import RenderSelect from 'components/select';
import Typography from '@material-ui/core/Typography';

const spacingUnit = `${muiTheme.spacing.unit}px`;

const _coll = css`
  display: flex;
  flex-direction: column;
`;

const _widthField = css`
  width: 250px;
`;

export const Wrap = styled('div')`
  ${_coll};
  align-items: flex-start;
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

export const Budget = styled(RenderInputNumber)`
  ${_widthField};
  margin: ${spacingUnit} !important;
`;

export const Select = styled(RenderSelect)`
  ${_widthField};  
  margin: ${spacingUnit} !important;
`;

export const WrapSelectDate = styled('form')`
  ${_coll};
`;

export const SelectDate = styled(RenderInput)`
  ${_widthField};
  margin: ${spacingUnit} !important;
`;