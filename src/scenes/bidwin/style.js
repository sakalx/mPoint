import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

export const Main = styled(Paper)`
  display: flex;
  flex-wrap: wrap;
  margin: 15px auto;
  padding: 15px;
  width: 80%;
`;

export const Menu = styled('nav')`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Screen = styled('nav')`
  flex: 3;
`;