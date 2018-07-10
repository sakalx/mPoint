import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import muiTheme from './theme';

import App from './App';

import ErrorBoundary from 'root/components/error-boundary';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline/>
    <ErrorBoundary>
      <MuiThemeProvider theme={muiTheme}>
        <App/>
      </MuiThemeProvider>
    </ErrorBoundary>
  </React.Fragment>
  , document.querySelector('#root'));