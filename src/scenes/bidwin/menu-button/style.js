import styled, {css} from 'styled-components';
import muiTheme from 'root/theme';

import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

const _margin = css`
  margin: ${muiTheme.spacing.unit}px !important;
`;

export const WrapLink = styled(Link)`
  ${_margin};
  text-decoration: none;
  width: 230px;
`;

export const ButtonLink = styled(Button)`
  width: 100%;
`;