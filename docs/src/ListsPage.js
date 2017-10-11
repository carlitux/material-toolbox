// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import { List, ListItem } from 'material-toolbox/list';
import Theme from 'material-toolbox/theme';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import Theme from 'material-toolbox/list';`;
const textOnBackground = `<Theme theme="background">
  <Text component="div" textStyle="body2">
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
</Theme>`;
const textOnPrimary = `<Theme theme="primary">
  <Text component="div" textStyle="body2">
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
</Theme>`;
const textOnSecondary = `<Theme theme="secondary">
  <Text component="div" textStyle="body2">
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
</Theme>`;

export default class ThemePage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          List
        </Text>

        <Text component="h2" textStyle="headline">
          List components are React wrappers of mdc-theme components.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/lists.html"
            target="_blank">
            Material Design guidelines: Lists
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/lists/"
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

        <Text component="section" textStyle="body1">
          <aside>
            <p>
              <em>NOTE:</em> For the purposes of this demo, we&#39;ve set a
              max-width of 600px on all <code>mdc-list</code> elements, and
              surrounded them by a 1px border. This is not included in the base
              css, which has the list take up as much width as possible (since
              it&#39;s a block element).
            </p>
          </aside>
          <strong>Checkbox should be created here</strong>
          <label htmlFor="toggle-rtl" id="toggle-rtl-label">
            Toggle RTL
          </label>
        </Text>

        <section className={styles['list-demo-wrapper']}>
          <Text component="h1" textStyle="display1">
            Single-Line List
          </Text>
          <section>
            <Text component="h3" textStyle="title">
              Text only
            </Text>

            <List>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Text only (dense)
            </Text>

            <List dense>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>
          </section>
          <section className="mdc-theme--dark">
            <Theme textStyle="primary" textOn="primary">
              <Text component="h3" textStyle="title">
                Text Only (dark)
              </Text>
            </Theme>

            <List>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Start Detail
            </Text>

            <p>
              <em>
                Note: The grey background is styled using demo placeholder
                styles
              </em>
            </p>

            <List>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>
          </section>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Text on background
          </Text>
          <Highlighter language="html">{textOnBackground}</Highlighter>
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
          <Highlighter language="html">{textOnPrimary}</Highlighter>
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
          <Highlighter language="html">{textOnSecondary}</Highlighter>
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
