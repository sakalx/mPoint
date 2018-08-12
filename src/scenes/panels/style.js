import styled, {css} from 'styled-components';

import AdIco from '@material-ui/icons/VerifiedUser';
import CampaignIco from '@material-ui/icons/VerifiedUser';
import Typography from '@material-ui/core/Typography';
import UserIco from '@material-ui/icons/Person';

const _margin = css`
  margin: 15px !important;
`;

const _iconSize = css`
  font-size: 34px !important;
`;

export const Wrap = styled('div')`
  ${_margin};
`;

export const UserIcon = styled(UserIco)`
  ${_iconSize};
  
`;export const CampaignIcon = styled(CampaignIco)`
  ${_iconSize};
  
`;export const AdIcon = styled(AdIco)`
  ${_iconSize};
`;

export const Summary = styled('section')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const SummaryTitle = styled(Typography)`
  flex: 0 1 150px;
  ${_margin};
`;

export const SummarySubTitle = styled(Typography)`
  flex: 1 1 auto;
  ${_margin};
`;