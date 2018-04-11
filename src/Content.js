// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';  // eslint-disable-line

import LayoutGrid from './material-toolbox/layout-grid/Grid';
import LayoutInner from './material-toolbox/layout-grid/Inner';

import Hero from './Hero';
import HomePage from './HomePage';

import AnimationPage from './AnimationPage';
import CheckboxesPage from './CheckboxesPage';
import FormFieldsPage from './FormFieldsPage';
import RipplesPage from './RipplesPage';
import SnackbarPage from './SnackbarPage';
import TabsPage from './TabsPage';
import TextFieldPage from './TextFieldPage';

const Content = () => (
  <React.Fragment>
    <Route exact path="/" component={Hero} />
    <LayoutGrid>
      <LayoutInner>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/animation" component={AnimationPage} />
        <Route
          exact
          path="/input-controls/checkboxes"
          component={CheckboxesPage}
        />
        <Route
          exact
          path="/input-controls/form-fields"
          component={FormFieldsPage}
        />
        <Route
          exact
          path="/input-controls/text-fields"
          component={TextFieldPage}
        />
        <Route exact path="/ripples" component={RipplesPage} />
        <Route exact path="/snackbar" component={SnackbarPage} />
        <Route exact path="/tabs" component={TabsPage} />
      </LayoutInner>
    </LayoutGrid>
  </React.Fragment>
);

export default Content;
