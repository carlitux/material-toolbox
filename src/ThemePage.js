// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import Theme from 'material-toolbox/theme';`;

export default class ThemePage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Theme
        </Text>

        <Text component="h2" textStyle="headline">
          Theme component is a React wrapper of mdc-theme component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/style/color.html"
            target="_blank">
            Material Design guidelines: Color
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/typography/"
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

        <Text component="h2" textStyle="title">
          Theme
        </Text>

        <p>
          Container of theme components. Every typography texts should be
          included in this component.
        </p>

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
              <td>textStyle</td>
              <td>String value: primary, secondary, hint, disabled, icon</td>
              <td />
              <td />
              <td>text style of component</td>
            </tr>
            <tr>
              <td>textOn</td>
              <td>
                String value: background, dark, light, primary, primary-light,
                primary-dark, secondary, secondary-light, secondary-dark
              </td>
              <td />
              <td />
              <td>text style of component</td>
            </tr>
            <tr>
              <td>theme</td>
              <td>String value: primary, secondary, background</td>
              <td />
              <td />
              <td>theme of component</td>
            </tr>
            <tr>
              <td>textVariant</td>
              <td>String value: light, dark</td>
              <td />
              <td />
              <td>text variant of component</td>
            </tr>
            <tr>
              <td>themeVariant</td>
              <td>String value: light, dark</td>
              <td />
              <td />
              <td>theme variant of component</td>
            </tr>
          </tbody>
        </table>

        <Text component="h1" textStyle="display1">
          Theme colors
        </Text>

        <section>
          <Text component="h2" textStyle="title">
            Theme colors as text
          </Text>

          <div className={styles['demo-theme__color']}>
            <Theme textStyle="primary">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Primary
              </Text>
            </Theme>
            <Theme textStyle="primary" textVariant="light">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Primary Light
              </Text>
            </Theme>
            <Theme textStyle="primary" textVariant="dark">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Primary Dark
              </Text>
            </Theme>
          </div>
          <div className={styles['demo-theme__color']}>
            <Theme textStyle="secondary">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Secondary
              </Text>
            </Theme>
            <Theme textStyle="secondary" textVariant="light">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Secondary Light
              </Text>
            </Theme>
            <Theme textStyle="secondary" textVariant="dark">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Secondary Dark
              </Text>
            </Theme>
          </div>
        </section>

        <section>
          <Text component="h2" textStyle="title">
            Theme colors as background
          </Text>

          <div className={styles['demo-theme__color']}>
            <Theme theme="primary" textStyle="primary" textOn="primary">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Primary
              </Text>
            </Theme>
            <Theme
              theme="primary"
              themeVariant="light"
              textStyle="primary"
              textOn="primary-light">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Primary Light
              </Text>
            </Theme>
            <Theme
              theme="primary"
              themeVariant="dark"
              textStyle="primary"
              textOn="primary-dark">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Primary Dark
              </Text>
            </Theme>
          </div>
          <div className={styles['demo-theme__color']}>
            <Theme textStyle="primary" theme="secondary" textOn="secondary">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Secondary
              </Text>
            </Theme>
            <Theme
              textStyle="primary"
              theme="secondary"
              themeVariant="light"
              textOn="secondary-light">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Secondary Light
              </Text>
            </Theme>
            <Theme
              textStyle="primary"
              theme="secondary"
              themeVariant="dark"
              textOn="secondary-dark">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Secondary Dark
              </Text>
            </Theme>
          </div>
          <div className={styles['demo-theme__color']}>
            <Theme textStyle="primary" theme="background" textOn="background">
              <Text
                component="div"
                textStyle="body2"
                className={styles['demo-theme__color__block']}>
                Background
              </Text>
            </Theme>
          </div>
        </section>

        <Text component="h1" textStyle="display1">
          Text colors for contrast
        </Text>

        <section>
          <Text component="h3" textStyle="title">
            Text on background
          </Text>

          <Theme theme="background">
            <Text
              component="div"
              textStyle="body2"
              className={styles['demo-theme__text-styles']}>
              <Theme textOn="background" textStyle="primary">
                <span>Primary</span>
              </Theme>
              <Theme textOn="background" textStyle="secondary">
                <span>Secondary</span>
              </Theme>
              <Theme textOn="background" textStyle="hint">
                <span>Hint</span>
              </Theme>
              <Theme textOn="background" textStyle="disabled">
                <span>Disabled</span>
              </Theme>
              <Theme textOn="background" textStyle="icon">
                <span className="material-icons">favorite</span>
              </Theme>
            </Text>
          </Theme>
          <Text component="h3" textStyle="title">
            Text on primary
          </Text>

          <Theme theme="primary">
            <Text
              component="div"
              textStyle="body2"
              className={styles['demo-theme__text-styles']}>
              <Theme textOn="primary" textStyle="primary">
                <span>Primary</span>
              </Theme>
              <Theme textOn="primary" textStyle="secondary">
                <span>Secondary</span>
              </Theme>
              <Theme textOn="primary" textStyle="hint">
                <span>Hint</span>
              </Theme>
              <Theme textOn="primary" textStyle="disabled">
                <span>Disabled</span>
              </Theme>
              <Theme textOn="primary" textStyle="icon">
                <span className="material-icons">favorite</span>
              </Theme>
            </Text>
          </Theme>
          <Text component="h3" textStyle="title">
            Text on secondary
          </Text>

          <Theme theme="secondary">
            <Text
              component="div"
              textStyle="body2"
              className={styles['demo-theme__text-styles']}>
              <Theme textOn="secondary" textStyle="primary">
                <span>Primary</span>
              </Theme>
              <Theme textOn="secondary" textStyle="secondary">
                <span>Secondary</span>
              </Theme>
              <Theme textOn="secondary" textStyle="hint">
                <span>Hint</span>
              </Theme>
              <Theme textOn="secondary" textStyle="disabled">
                <span>Disabled</span>
              </Theme>
              <Theme textOn="secondary" textStyle="icon">
                <span className="material-icons">favorite</span>
              </Theme>
            </Text>
          </Theme>
        </section>
      </LayoutCell>
    );
  }
}
