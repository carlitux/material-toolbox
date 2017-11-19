// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button } from 'material-toolbox/button';
import {
  Card,
  CardMedia,
  CardSupportingText,
  CardPrimary,
  CardText,
  CardActions,
  CardHorizontalBlock,
  CardMediaItem,
} from 'material-toolbox/card';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import {
  Card,
  CardMedia,
  CardSupportingText,
  CardPrimary,
  CardText,
  CardActions,
  CardHorizontalBlock,
  CardMediaItem,
} from 'material-toolbox/card';`;

export default class CardPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Card
        </Text>

        <Text component="h2" textStyle="headline">
          Card components are React wrappers of mdc-cards components.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/cards.html"
            target="_blank">
            Material Design guidelines: Cards
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/cards/"
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
          Card
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
              <td>dark</td>
              <td>boolean</td>
              <td />
              <td />
              <td>If true enable dark mode</td>
            </tr>
            <tr>
              <td>component</td>
              <td>React.ComponentType&lt;any&gt;</td>
              <td>div</td>
              <td />
              <td>Component type that will be rendered.</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          CardMedia
        </Text>

        <Text component="h3" textStyle="title">
          CardMediaItem
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
              <td>size</td>
              <td>String values: 1dot5x, 2x, 3x</td>
              <td />
              <td />
              <td>Change the size of media item</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          CardSupportingText
        </Text>

        <Text component="h3" textStyle="title">
          CardPrimary
        </Text>

        <Text component="h3" textStyle="title">
          CardText
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
              <td>large</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Set larger title</td>
            </tr>
            <tr>
              <td>isSubtitle</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Set the subtitle style instead title</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          CardActions
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
              <td>vertical</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Set vertical order on children</td>
            </tr>
          </tbody>
        </table>

        <Text component="h3" textStyle="title">
          CardHorizontalBlock
        </Text>

        <section className="demo-cards">
          <div>
            <Card className="demo-card">
              <CardMedia className="demo-card__16-9-media" />
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </CardSupportingText>
            </Card>
          </div>
          <div>
            <Card className="demo-card demo-card--with-avatar">
              <CardPrimary>
                <div className="demo-card__avatar" />
                <CardText>Title</CardText>
                <CardText isSubtitle>Subhead</CardText>
              </CardPrimary>
              <CardMedia className="demo-card__16-9-media" />
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </CardSupportingText>
              <CardActions>
                <Button buttonType="compact">Action 1</Button>
                <Button buttonType="compact">Action 2</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="demo-card demo-card--with-avatar">
              <CardPrimary>
                <div className="demo-card__avatar" />
                <CardText>Title</CardText>
                <CardText isSubtitle>Subhead</CardText>
              </CardPrimary>
              <CardMedia className="demo-card__16-9-media" />
              <CardActions vertical>
                <Button buttonType="compact">Action 1</Button>
                <Button buttonType="compact">Action 2</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="demo-card">
              <CardMedia className="demo-card__16-9-media" />
              <CardPrimary>
                <CardText large>Title goes here</CardText>
                <CardText isSubtitle>Subtitle goes here</CardText>
              </CardPrimary>
              <CardActions>
                <Button buttonType="compact">Action 1</Button>
                <Button buttonType="compact">Action 2</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="demo-card">
              <CardPrimary>
                <CardText large>Title goes here</CardText>
                <CardText isSubtitle>Subtitle goes here</CardText>
              </CardPrimary>
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardSupportingText>
              <CardActions>
                <Button buttonType="compact">Action 1</Button>
                <Button buttonType="compact">Action 2</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="demo-card demo-card--bg-demo" dark>
              <CardPrimary>
                <CardText large>Title goes here</CardText>
                <CardText isSubtitle>Subtitle goes here</CardText>
              </CardPrimary>
              <CardActions>
                <Button buttonType="compact">Action 1</Button>
                <Button buttonType="compact">Action 2</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="demo-card demo-card--small">
              <CardMedia className="demo-card__16-9-media">
                <CardText large>Title</CardText>
              </CardMedia>
              <CardActions>
                <Button buttonType="compact">Action 1</Button>
                <Button buttonType="compact">Action 2</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="demo-card">
              <CardHorizontalBlock>
                <CardPrimary>
                  <CardText large>Title here</CardText>
                  <CardText isSubtitle>Subtitle here</CardText>
                </CardPrimary>
                <CardMediaItem src="https://material-components-web.appspot.com/images/1-1.jpg" />
              </CardHorizontalBlock>
              <CardActions>
                <Button buttonType="compact">Action 1</Button>
                <Button buttonType="compact">Action 2</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="demo-card">
              <CardHorizontalBlock>
                <CardPrimary>
                  <CardText large>Title here</CardText>
                  <CardText isSubtitle>Subtitle here</CardText>
                </CardPrimary>
                <CardMediaItem
                  size="1dot5x"
                  src="https://material-components-web.appspot.com/images/1-1.jpg"
                />
              </CardHorizontalBlock>
              <CardActions>
                <Button buttonType="compact">Action 1</Button>
                <Button buttonType="compact">Action 2</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="demo-card">
              <CardHorizontalBlock>
                <CardPrimary>
                  <CardText large>Title here</CardText>
                  <CardText isSubtitle>Subtitle here</CardText>
                </CardPrimary>
                <CardMediaItem
                  size="2x"
                  src="https://material-components-web.appspot.com/images/1-1.jpg"
                />
              </CardHorizontalBlock>
              <CardActions>
                <Button buttonType="compact">Action 1</Button>
                <Button buttonType="compact">Action 2</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className="demo-card" style={{ maxWidth: 500 }}>
              <CardHorizontalBlock>
                <CardMediaItem
                  size="3x"
                  src="https://material-components-web.appspot.com/images/1-1.jpg"
                />
                <CardActions vertical>
                  <Button buttonType="compact">A1</Button>
                  <Button buttonType="compact">A2</Button>
                </CardActions>
              </CardHorizontalBlock>
            </Card>
          </div>
        </section>
      </LayoutCell>
    );
  }
}
