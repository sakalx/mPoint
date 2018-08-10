import styled from 'styled-components';
import muiTheme from 'root/theme';

import EditIco from '@material-ui/icons/Edit';
import SaveIco from '@material-ui/icons/Save';
import SwitchesGroup from 'root/components/switches-group';

const {palette} = muiTheme;

export const Wrap = styled('div')`
  padding-top: 15px;
  position: relative;
`;

export const Status = styled(SwitchesGroup)`
  position: absolute !important;
  right: 15px;
  top: 0;
`;

export const LabelValue = styled('span')`
  ${({enabled}) => `
    color: ${enabled ? palette.primary.dark : palette.textSecondary}
  `}
`;

export const SaveIcon = styled(SaveIco)`
  font-size: 20px !important;
  margin-right: 10px;
`;

export const EditIcon = styled(EditIco)`
  font-size: 20px !important;
  margin-right: 10px;
`;