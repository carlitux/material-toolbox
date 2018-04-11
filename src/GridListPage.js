// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button } from 'material-toolbox/button';
import { List, ListItem } from 'material-toolbox/list';
import {
  GridList,
  GridTile,
  GridTileContainer,
  GridTileText,
  GridTileContent,
  GridTileIcon,
} from 'material-toolbox/grid-list';

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import {
  GridList,
  GridTile,
  GridTileContainer,
  GridTileText,
  GridTileContent,
  GridTileIcon,
} from 'material-toolbox/grid-list';`;

const tiles = [1, 2, 3, 4, 5, 6];

export default class GridListPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Grid Lists
        </Text>

        <Text component="h2" textStyle="headline">
          Grid Lists components are React wrappers of mdc-grid-list components.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/grid-lists.html"
            target="_blank">
            Material Design guidelines: Grid lists
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/grid-lists/"
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
          GridTileIcon
        </Text>

        <Text component="h3" textStyle="title">
          GridTile
        </Text>

        <Text component="h3" textStyle="title">
          GridTileContent
        </Text>

        <Text component="h3" textStyle="title">
          GridTileContainer
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
              <td>secondary</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Defines the container as secondary one</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          GridTileText
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
              <td>support</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Support text used as second line.</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          GridList
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
              <td>gutter</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Change default gutter 1x</td>
            </tr>
            <tr>
              <td>header</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Caption will be placed at header</td>
            </tr>
            <tr>
              <td>twoLines</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Set the correct className to allow two lines caption</td>
            </tr>
            <tr>
              <td>withIcon</td>
              <td>string, values: start, end</td>
              <td />
              <td />
              <td>
                Set the correct className to set the icon in correct position.
              </td>
            </tr>
            <tr>
              <td>ratio</td>
              <td>string, values: 1x1 2x3 3x2 3x4 4x3 16x9</td>
              <td />
              <td />
              <td>Modify ratio tile.</td>
            </tr>
          </tbody>
        </table>

        <Text textStyle="title" component="h2">
          Grid List (Default): empty grid
        </Text>

        <GridList />

        <Text textStyle="title" component="h2">
          Grid List (Default): tile aspect ratio 1x1 with oneline footer caption
        </Text>

        <GridList>
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: tile aspect ratio 1x1 with 1px gutter
        </Text>

        <GridList gutter>
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: tile aspect ratio 1x1 image only
        </Text>

        <GridList>
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: tile aspect ratio 1x1 with oneline header caption
        </Text>

        <GridList header>
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: tile aspect ratio 1x1 with twoline footer caption
        </Text>

        <GridList twoLines>
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
                <GridTileText support>Support Text</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: tile aspect ratio 1x1 with oneline footer caption and icon
          at start of the caption
        </Text>

        <GridList withIcon="start">
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileIcon className="material-icons">
                  star_border
                </GridTileIcon>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: tile aspect ratio 1x1 with twoline footer caption and icon
          at start of the caption
        </Text>

        <GridList withIcon="start" twoLines>
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileIcon className="material-icons">
                  star_border
                </GridTileIcon>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
                <GridTileText support>Support Text</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: tile aspect ratio 1x1 with oneline footer caption and icon
          at end of the caption
        </Text>

        <GridList withIcon="end">
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileIcon className="material-icons">
                  star_border
                </GridTileIcon>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: tile aspect ratio 1x1 with twoline footer caption and icon
          at end of the caption
        </Text>

        <GridList withIcon="end" twoLines>
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileIcon className="material-icons">
                  star_border
                </GridTileIcon>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
                <GridTileText support>Support Text</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: tile aspect ratio 16x9 with oneline footer caption
          (Support: 16:9, 4:3, 3:4, 2:3, 3:2 as well)
        </Text>

        <GridList ratio="16x9">
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent src="https://material-components-web.appspot.com/images/16-9.jpg" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>

        <Text textStyle="title" component="h2">
          Grid List: use div's background instead of img tag (useful when image
          ratio cannot be ensured)
        </Text>

        <GridList header>
          {tiles.map(item => (
            <GridTile key={item}>
              <GridTileContainer>
                <GridTileContent className="demo-grid-tile-content" />
              </GridTileContainer>
              <GridTileContainer secondary>
                <GridTileText>Single Very Long Grid Title Line</GridTileText>
              </GridTileContainer>
            </GridTile>
          ))}
        </GridList>
      </LayoutCell>
    );
  }
}
/* eslint-enable */
