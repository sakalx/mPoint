import styled from 'styled-components';
import muiTheme from 'root/theme';

import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

const spacingUnit = `${muiTheme.spacing.unit}px`;

export const WrapLink = styled(Link)`
  margin: ${spacingUnit} !important;
  text-decoration: none;
  width: 230px;
`;

export const ButtonLink = styled(Button)`
  width: 100%;
`;