/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
/* eslint-enable */
import PersistentDrawerApp from './App';

ReactDOM.render(
  <AppContainer>
    <PersistentDrawerApp />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
