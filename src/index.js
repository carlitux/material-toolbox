import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter } from 'react-router-dom';
import App from './App';

import './styles.scss';

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
