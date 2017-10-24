// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell, LayoutGrid, LayoutInner } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import Elevation from 'material-toolbox/elevation';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import Elevation from 'material-toolbox/elevation;`;

export default class ElevationPage extends React.Component<
  {},
  { mouseOver: boolean },
> {
  state = {
    mouseOver: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onMouseEnterHandler = () => {
    this.setState({ mouseOver: true });
  };

  onMouseLeaveHandler = () => {
    this.setState({ mouseOver: false });
  };

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Elevation
        </Text>

        <Text component="h2" textStyle="headline">
          Elevation component is a React wrapper of mdc-elevation component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/what-is-material/elevation-shadows.html"
            target="_blank">
            Material Design guidelines: Shadows & elevation
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/elevation/"
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
          Elevation
        </Text>

        <p>
          This is a react wrapper for mdc-elevation. This component will add the
          class names to child components.
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
              <td>elevation</td>
              <td>number: 0-24</td>
              <td />
              <td>✔</td>
              <td>dp elevation</td>
            </tr>
            <tr>
              <td>transition</td>
              <td>boolean</td>
              <td />
              <td />
              <td>enable transition effect</td>
            </tr>
          </tbody>
        </table>

        <section className="elevations-demo-surfaces">
          <Elevation elevation={0}>
            <figure className="elevation-demo-surface">
              <figcaption>
                0dp (<code>mdc-elevation--z0</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={1}>
            <figure className="elevation-demo-surface">
              <figcaption>
                1dp (<code>mdc-elevation--z1</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={2}>
            <figure className="elevation-demo-surface">
              <figcaption>
                2dp (<code>mdc-elevation--z2</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={3}>
            <figure className="elevation-demo-surface">
              <figcaption>
                3dp (<code>mdc-elevation--z3</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={4}>
            <figure className="elevation-demo-surface">
              <figcaption>
                4dp (<code>mdc-elevation--z4</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={5}>
            <figure className="elevation-demo-surface">
              <figcaption>
                5dp (<code>mdc-elevation--z5</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={6}>
            <figure className="elevation-demo-surface">
              <figcaption>
                6dp (<code>mdc-elevation--z6</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={7}>
            <figure className="elevation-demo-surface">
              <figcaption>
                7dp (<code>mdc-elevation--z7</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={8}>
            <figure className="elevation-demo-surface">
              <figcaption>
                8dp (<code>mdc-elevation--z8</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={9}>
            <figure className="elevation-demo-surface">
              <figcaption>
                9dp (<code>mdc-elevation--z9</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={10}>
            <figure className="elevation-demo-surface">
              <figcaption>
                10dp (<code>mdc-elevation--z10</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={11}>
            <figure className="elevation-demo-surface">
              <figcaption>
                11dp (<code>mdc-elevation--z11</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={12}>
            <figure className="elevation-demo-surface">
              <figcaption>
                12dp (<code>mdc-elevation--z12</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={13}>
            <figure className="elevation-demo-surface">
              <figcaption>
                13dp (<code>mdc-elevation--z13</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={14}>
            <figure className="elevation-demo-surface">
              <figcaption>
                14dp (<code>mdc-elevation--z14</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={15}>
            <figure className="elevation-demo-surface">
              <figcaption>
                15dp (<code>mdc-elevation--z15</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={16}>
            <figure className="elevation-demo-surface">
              <figcaption>
                16dp (<code>mdc-elevation--z16</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={17}>
            <figure className="elevation-demo-surface">
              <figcaption>
                17dp (<code>mdc-elevation--z17</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={18}>
            <figure className="elevation-demo-surface">
              <figcaption>
                18dp (<code>mdc-elevation--z18</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={19}>
            <figure className="elevation-demo-surface">
              <figcaption>
                19dp (<code>mdc-elevation--z19</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={20}>
            <figure className="elevation-demo-surface">
              <figcaption>
                20dp (<code>mdc-elevation--z20</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={21}>
            <figure className="elevation-demo-surface">
              <figcaption>
                21dp (<code>mdc-elevation--z21</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={22}>
            <figure className="elevation-demo-surface">
              <figcaption>
                22dp (<code>mdc-elevation--z22</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={23}>
            <figure className="elevation-demo-surface">
              <figcaption>
                23dp (<code>mdc-elevation--z23</code>)
              </figcaption>
            </figure>
          </Elevation>
          <Elevation elevation={24}>
            <figure className="elevation-demo-surface">
              <figcaption>
                24dp (<code>mdc-elevation--z24</code>)
              </figcaption>
            </figure>
          </Elevation>
        </section>
        <section>
          <Elevation transition elevation={this.state.mouseOver ? 8 : 2}>
            <div
              id="elevation-hover-el"
              onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>
              <p>Hover over for a transition</p>
            </div>
          </Elevation>
        </section>
      </LayoutCell>
    );
  }
}
