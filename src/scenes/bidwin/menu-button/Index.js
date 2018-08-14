import React from 'react';
import {Route} from 'react-router-dom';


import {
  ButtonLink,
  WrapLink,
} from './style';

const MenuButton = ({label, to, activeWhenExact}) => (
  <Route
    path={to}
    exact={activeWhenExact}
    children={({match}) => (
      <WrapLink to={to}>
        <ButtonLink
          color='primary'
          variant={match ? 'contained' : 'outlined'}
        >
          {label}
        </ButtonLink>
      </WrapLink>
    )}
  />
);

export default MenuButton;