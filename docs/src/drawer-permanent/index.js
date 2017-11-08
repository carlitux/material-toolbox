/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
/* eslint-enable */
import PermanentDrawerApp from './App';

ReactDOM.render(
  <AppContainer>
    <PermanentDrawerApp />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
