// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button } from 'material-toolbox/button';
import { List, ListItem } from 'material-toolbox/list';
import LinearProgress from 'material-toolbox/linear-progress';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import LinearProgress from 'material-toolbox/linear-progress';`;

export default class LinearProgressPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Linear Progress
        </Text>

        <Text component="h2" textStyle="headline">
          Linear Progress are React wrapper of mdc-linear-progress component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/progress-activity.html"
            target="_blank">
            Material Design guidelines: Linear Progress
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/linear-progress/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          React components
        </Text>

        <Text component="h3" textStyle="title">
          Import
        </Text>

        <Highlighter language="javascript">{importComponents}</Highlighter>

        <Text component="h3" textStyle="title">
          LinearProgress
        </Text>

        <table className={styles['table-doc']}>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>progress</td>
              <td>number</td>
              <td />
              <td />
              <td>Number to fill from 0 to 1</td>
            </tr>
            <tr>
              <td>buffer</td>
              <td>number</td>
              <td />
              <td />
              <td>Number to fill from 0 to 1</td>
            </tr>
            <tr>
              <td>indeterminate</td>
              <td>boolean</td>
              <td />
              <td />
              <td>set a indeterminate progress</td>
            </tr>
            <tr>
              <td>reversed</td>
              <td>boolean</td>
              <td />
              <td />
              <td>set a reversed linear progress</td>
            </tr>
          </tbody>
        </table>

        <Text textStyle="title" component="h2">
          Linear Progress Indicators
        </Text>

        <div>
          <LinearProgress progress={0.5} />
          <Text textStyle="body1" component="h2">
            Determinate
          </Text>
        </div>

        <div>
          <LinearProgress indeterminate />
          <Text textStyle="body1" component="h2">
            Indeterminate
          </Text>
        </div>

        <div>
          <LinearProgress progress={0.5} buffer={0.7} />
          <Text textStyle="body1" component="h2">
            Buffer
          </Text>
        </div>

        <div>
          <LinearProgress progress={0.5} reversed />
          <Text textStyle="body1" component="h2">
            Determinate reversed
          </Text>
        </div>

        <div>
          <LinearProgress indeterminate reversed />
          <Text textStyle="body1" component="h2">
            Indeterminate reversed
          </Text>
        </div>

        <div>
          <LinearProgress progress={0.5} buffer={0.7} reversed />
          <Text textStyle="body1" component="h2">
            Buffer reversed
          </Text>
        </div>
      </LayoutCell>
    );
  }
}
