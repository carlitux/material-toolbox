/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import App from './App';
/* eslint-enable */

ReactDOM.render(
  <AppContainer>
    <HashRouter>
      <App />
    </HashRouter>
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
