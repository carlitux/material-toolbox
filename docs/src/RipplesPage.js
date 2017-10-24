// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell, LayoutGrid, LayoutInner } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import { LayoutGrid, LayoutCell, LayoutInner } from 'material-toolbox/layout-grid';`;

export default class ThemePage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Ripple
        </Text>

        <Text component="h2" textStyle="headline">
          Ripple component is a React wrapper of mdc-ripple component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/ripples/"
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
          LayoutGrid
        </Text>

        <p>
          This is a react wrapper for mdc-layout-grid grid. This component can
          contain any of component type but LayoutInner is the component to
          follow the guidelines.
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
              <td>className</td>
              <td>String</td>
              <td />
              <td />
              <td>classname of component</td>
            </tr>
            <tr>
              <td>align</td>
              <td>String values: left, right</td>
              <td />
              <td />
              <td>How elements will be aligned</td>
            </tr>
            <tr>
              <td>fixed</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Will be a fixed width</td>
            </tr>
          </tbody>
        </table>

        <Text component="h2" textStyle="title">
          LayoutInner
        </Text>

        <p>
          This is a react wrapper for mdc-layout-grid inner. This component can
          contain any of component type but LayoutCell is the component to
          follow the guidelines.
        </p>

        <Text component="h2" textStyle="title">
          LayoutCell
        </Text>

        <p>
          This is a react wrapper for mdc-layout-grid cell. It can contain any
          React component.
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
              <td>align</td>
              <td>String values: top, middle, bottom</td>
              <td />
              <td />
              <td>How cell will be vertically aligned</td>
            </tr>
            <tr>
              <td>className</td>
              <td>string</td>
              <td />
              <td />
              <td>className that will be added</td>
            </tr>
            <tr>
              <td>span</td>
              <td>number values: 1-12</td>
              <td />
              <td />
              <td>
                how many columns will be filled in row up to parent width.
              </td>
            </tr>
            <tr>
              <td>order</td>
              <td>number values: 1-12</td>
              <td />
              <td />
              <td>how the elements will be ordered</td>
            </tr>
            <tr>
              <td>phone</td>
              <td>number values: 1-4</td>
              <td />
              <td />
              <td>how many columns will be filled in phone row</td>
            </tr>
            <tr>
              <td>tablet</td>
              <td>number values: 1-8</td>
              <td />
              <td />
              <td>how many columns will be filled in tablet row</td>
            </tr>
            <tr>
              <td>desktop</td>
              <td>number values: 1-12</td>
              <td />
              <td />
              <td>how many columns will be filled in desktop row</td>
            </tr>
          </tbody>
        </table>

        <section>
          <Text component="h1" textStyle="display1">
            Layout grid (in fluid container)
          </Text>
          <section>
            <Text component="h3" textStyle="title">
              Grid of default wide (4 columns) items
            </Text>

            <LayoutGrid className="demo-grid">
              <LayoutInner>
                <LayoutCell className="demo-cell">4</LayoutCell>
                <LayoutCell className="demo-cell">4</LayoutCell>
                <LayoutCell className="demo-cell">4</LayoutCell>
              </LayoutInner>
            </LayoutGrid>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Grid of 1 column wide items
            </Text>

            <LayoutGrid className="demo-grid">
              <LayoutInner>
                {[...Array(12).keys()].map(x => (
                  <LayoutCell className="demo-cell" span={1} key={x}>
                    1
                  </LayoutCell>
                ))}
              </LayoutInner>
            </LayoutGrid>
          </section>

          <section>
            <Text component="h3" textStyle="title">
              Grid of differently sized items
            </Text>

            <LayoutGrid className="demo-grid">
              <LayoutInner>
                <LayoutCell className="demo-cell" span={6}>
                  6
                </LayoutCell>
                <LayoutCell className="demo-cell" span={4}>
                  4
                </LayoutCell>
                <LayoutCell className="demo-cell" span={2}>
                  2
                </LayoutCell>
              </LayoutInner>
            </LayoutGrid>
          </section>

          <section>
            <Text component="h3" textStyle="title">
              Grid of items with tweaks at different screen sizes
            </Text>

            <LayoutGrid className="demo-grid">
              <LayoutInner>
                <LayoutCell className="demo-cell" span={6} tablet={8}>
                  6 (8 tablet)
                </LayoutCell>
                <LayoutCell className="demo-cell" span={4} tablet={6}>
                  4 (6 tablet)
                </LayoutCell>
                <LayoutCell className="demo-cell" span={2} tablet={4}>
                  2 (4 phone)
                </LayoutCell>
              </LayoutInner>
            </LayoutGrid>
          </section>
        </section>

        <section>
          <Text component="h1" textStyle="display1">
            Layout grid (in fluid container)
          </Text>
          <section>
            <Text component="h3" textStyle="title">
              Grid of default wide (4 columns) items
            </Text>

            <LayoutGrid className="demo-grid">
              <LayoutInner>
                <LayoutCell className="demo-cell">4</LayoutCell>
                <LayoutCell className="demo-cell">4</LayoutCell>
                <LayoutCell className="demo-cell">4</LayoutCell>
              </LayoutInner>
            </LayoutGrid>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Grid of 1 column wide items
            </Text>

            <LayoutGrid className="demo-grid">
              <LayoutInner>
                {[...Array(12).keys()].map(x => (
                  <LayoutCell className="demo-cell" span={1} key={x}>
                    1
                  </LayoutCell>
                ))}
              </LayoutInner>
            </LayoutGrid>
          </section>

          <section>
            <Text component="h3" textStyle="title">
              Grid of differently sized items
            </Text>

            <LayoutGrid className="demo-grid">
              <LayoutInner>
                <LayoutCell className="demo-cell" span={6}>
                  6
                </LayoutCell>
                <LayoutCell className="demo-cell" span={4}>
                  4
                </LayoutCell>
                <LayoutCell className="demo-cell" span={2}>
                  2
                </LayoutCell>
              </LayoutInner>
            </LayoutGrid>
          </section>

          <section>
            <Text component="h3" textStyle="title">
              Grid of items with tweaks at different screen sizes
            </Text>

            <LayoutGrid className="demo-grid">
              <LayoutInner>
                <LayoutCell className="demo-parent-cell" span={4}>
                  <LayoutInner>
                    <LayoutCell className="demo-cell demo-child-cell" span={4}>
                      <span>C4</span>
                    </LayoutCell>
                    <LayoutCell className="demo-cell demo-child-cell" span={4}>
                      <span>C4</span>
                    </LayoutCell>
                    <LayoutCell className="demo-cell demo-child-cell" span={4}>
                      <span>C4</span>
                    </LayoutCell>
                  </LayoutInner>
                  <span>Parent 4</span>
                </LayoutCell>
                <LayoutCell className="demo-cell" span={4}>
                  4
                </LayoutCell>
                <LayoutCell className="demo-cell" span={4}>
                  4
                </LayoutCell>
              </LayoutInner>
            </LayoutGrid>
          </section>

          <Text component="h2" textStyle="headline">
            Grid with max width
          </Text>

          <section>
            <Text component="h3" textStyle="title">
              Grid with max width (1280px) and center alignment by default
            </Text>

            <LayoutGrid className="demo-grid max-width">
              <LayoutInner>
                <LayoutCell className="demo-cell" span={4} />
                <LayoutCell className="demo-cell" span={4} />
                <LayoutCell className="demo-cell" span={4} />
              </LayoutInner>
            </LayoutGrid>
          </section>

          <section>
            <Text component="h3" textStyle="title">
              Grid with max width (1280px) and left alignment
            </Text>

            <LayoutGrid className="demo-grid max-width" align="left">
              <LayoutInner>
                <LayoutCell className="demo-cell" span={4} />
                <LayoutCell className="demo-cell" span={4} />
                <LayoutCell className="demo-cell" span={4} />
              </LayoutInner>
            </LayoutGrid>
          </section>
        </section>

        <section>
          <Text component="h1" textStyle="display1">
            Fixed column width layout grid
          </Text>

          <section>
            <Text component="h3" textStyle="title">
              Fixed column width layout grid and center alignment by default
            </Text>

            <LayoutGrid className="demo-grid" fixed>
              <LayoutInner>
                <LayoutCell className="demo-cell" span={1} />
                <LayoutCell className="demo-cell" span={1} />
                <LayoutCell className="demo-cell" span={1} />
              </LayoutInner>
            </LayoutGrid>
          </section>

          <section>
            <Text component="h3" textStyle="title">
              Fixed column width layout grid and right alignment
            </Text>

            <LayoutGrid className="demo-grid" align="right" fixed>
              <LayoutInner>
                <LayoutCell className="demo-cell" span={1} />
                <LayoutCell className="demo-cell" span={1} />
                <LayoutCell className="demo-cell" span={1} />
              </LayoutInner>
            </LayoutGrid>
          </section>
        </section>
      </LayoutCell>
    );
  }
}
