// @flow
/* eslint-disable */
import * as React from 'react';
import Highlight from 'react-highlight';

import { LayoutCell } from '@mcw/layout-grid';
import { Text } from '@mcw/typography';
import Theme from '@mcw/theme';
/* eslint-enable */

import ThemeLink from './ThemedLink';
import styles from './styles.scss';

const sassExample = `@import '@mcw/typography/lib/styles.scss';

html, body {
  @include mdc-typography-base;
}

p {
  @include mdc-typography(body1);
}
`;

const textStyles = `
  <Typography>
    <Text mdcStyle="display4" component="h1">Display 4</Text>
    <Text mdcStyle="display3" component="h2">Display 3</Text>
    <Text mdcStyle="display2" component="h3">Display 2</Text>
    <Text mdcStyle="display1" component="h4">Display 1</Text>
    <Text mdcStyle="headline" component="h1">Headline</Text>
    <Text mdcStyle="title" component="h2">
      Title <Text mdcStyle="caption" component="span">Caption</Text>
    </Text>
    <Text mdcStyle="subheading2" component="h2">Subheading 2</Text>
    <Text mdcStyle="subheading1" component="h3">Subheading 1</Text>
    <Text mdcStyle="body1" component="p">
      Body1 paragrapah. Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </Text>
    <Text mdcStyle="body2" component="p">
      Body 2 text, calling something out.
    </Text>
  </Typography>
`;

const textStylesAdjust = `
  <Typography>
    <Text mdcStyle="display4" component="h1" adjustMargin>Display 4</Text>
    <Text mdcStyle="display3" component="h2" adjustMargin>Display 3</Text>
    <Text mdcStyle="display2" component="h3" adjustMargin>Display 2</Text>
    <Text mdcStyle="display1" component="h4" adjustMargin>Display 1</Text>
    <Text mdcStyle="headline" component="h1" adjustMargin>Headline</Text>
    <Text mdcStyle="title" component="h2" adjustMargin>
      Title <Text mdcStyle="caption" component="span" adjustMargin>Caption</Text>
    </Text>
    <Text mdcStyle="subheading2" component="h2" adjustMargin>Subheading 2</Text>
    <Text mdcStyle="subheading1" component="h3" adjustMargin>Subheading 1</Text>
    <Text mdcStyle="body1" component="p" adjustMargin>
      Body1 paragrapah. Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </Text>
    <Text mdcStyle="body2" component="p" adjustMargin>
      Body 2 text, calling something out.
    </Text>
  </Typography>
`;

export default class TypographyPage extends React.Component<{}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" mdcStyle="display1">
          Typography{' '}
        </Text>

        <Text component="h2" mdcStyle="headline">
          Typography component is a React wrapper of mdc-typography component.
        </Text>

        <p>
          Material Design’s text sizes and styles were developed to balance
          content density and reading comfort under typical usage conditions.
        </p>

        <p>
          Text is a React component that applies these styles to MDC Web
          components. The typographic styles in this module are derived from ten
          styles:
        </p>

        <Text component="div" mdcStyle="body1">
          <ul>
            <li>Display 4</li>
            <li>Display 3</li>
            <li>Display 2</li>
            <li>Display 1</li>
            <li>Headline</li>
            <li>Title</li>
            <li>Subheading 2</li>
            <li>Subheading 1</li>
            <li>Body 2</li>
            <li>Body 1</li>
            <li>Caption</li>
            <li>Button</li>
          </ul>
        </Text>

        <Text component="h3" mdcStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemeLink
            to="https://material.io/guidelines/style/typography.html"
            target="_blank">
            Material Design guidelines: Typography
          </ThemeLink>
        </p>

        <Text component="h3" mdcStyle="title">
          Installation
        </Text>

        <Highlight>$ npm install --save @mcw/typography</Highlight>

        <Text component="h3" mdcStyle="title">
          Usage
        </Text>

        <Text component="p" mdcStyle="body2">
          This package can be used with componets also using the scss mixins.
        </Text>

        <Text component="h4" mdcStyle="subheading1">
          Load Roboto
        </Text>

        <Highlight>
          {'<head>\n'}
          {'  <link href="https://fonts.googleapis.com/css?family='}
          {'Roboto:300,400,500" rel="stylesheet">\n'}
          {'</head>'}
        </Highlight>

        <Text component="h4" mdcStyle="subheading1">
          Sass Variables and Mixins
        </Text>

        <table className={styles['table-doc']}>
          <thead>
            <tr>
              <th>Mixin</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>mdc-typography-base</code>
              </td>
              <td>Sets the font to Roboto</td>
            </tr>
            <tr>
              <td>
                <code>mdc-typography($style)</code>
              </td>
              <td>
                Applies one of the typography styles, including setting the font
                to Roboto
              </td>
            </tr>
            <tr>
              <td>
                <code>mdc-typography-adjust-margin($style)</code>
              </td>
              <td>Positions text</td>
            </tr>
            <tr>
              <td>
                <code>mdc-typography-overflow-ellipsis</code>
              </td>
              <td>Truncates overflow text to one line with an ellipsis</td>
            </tr>
          </tbody>
        </table>
        <p>
          A note about <code>mdc-typography-adjust-margin</code>,{' '}
          <code>mdc-typography-adjust-margin</code> will change the margin
          properties of the element it is applied to, to align text correctly.{' '}
          <code>mdc-typography-adjust-margin</code> should only be used in a
          text context; using this property on UI elements such as buttons may
          cause them to be positioned incorrectly.
        </p>
        <p>
          A note about <code>mdc-typography-overflow-ellipsis</code>,{' '}
          <code>mdc-typography-overflow-ellipsis</code> should only be used if
          the element is <code>display: block</code> or{' '}
          <code>display: inline-block</code>.
        </p>

        <Text component="h4" mdcStyle="subheading1">
          <code>$style</code> Values
        </Text>

        <p>
          These styles can be used as the <code>$style</code> argument for{' '}
          <code>mdc-typography</code> and{' '}
          <code>mdc-typography-adjust-margin</code> mixins.
        </p>

        <Text component="div" mdcStyle="body1">
          <ul>
            <li>
              <code>display4</code>
            </li>
            <li>
              <code>display3</code>
            </li>
            <li>
              <code>display2</code>
            </li>
            <li>
              <code>display1</code>
            </li>
            <li>
              <code>headline</code>
            </li>
            <li>
              <code>title</code>
            </li>
            <li>
              <code>subheading2</code>
            </li>
            <li>
              <code>subheading1</code>
            </li>
            <li>
              <code>body2</code>
            </li>
            <li>
              <code>body1</code>
            </li>
            <li>
              <code>caption</code>
            </li>
            <li>
              <code>button</code>
            </li>
          </ul>
        </Text>
        <Highlight>{sassExample}</Highlight>

        <Text component="h4" mdcStyle="subheading1">
          React components
        </Text>

        <Text component="h4" mdcStyle="subheading2">
          Typography
        </Text>

        <p>
          HOC container of typography components. Every typography texts should
          be included in this component.
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
          </tbody>
        </table>

        <Text component="h4" mdcStyle="subheading2">
          Text
        </Text>

        <p>HOC container that sets the correct style</p>

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
              <td>mdcStyle</td>
              <td>
                String value: display4, display3, display2, display1, headline,
                title, subheading2, subheading1, body2, body1, caption, button
              </td>
              <td />
              <td>✔</td>
              <td>Style of text component.</td>
            </tr>
            <tr>
              <td>adjustMargin</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Enable adjustment of margin.</td>
            </tr>
            <tr>
              <td>className</td>
              <td>String</td>
              <td />
              <td />
              <td>classname of component</td>
            </tr>
            <tr>
              <td>component</td>
              <td>{'React.ElementType<any>'}</td>
              <td>span</td>
              <td />
              <td>classname of component</td>
            </tr>
          </tbody>
        </table>

        <Text mdcStyle="display2" component="h4">
          Styles
        </Text>

        <Highlight>{textStyles}</Highlight>

        <div>
          <Text mdcStyle="display4" component="h1">
            Display 4
          </Text>
          <Text mdcStyle="display3" component="h2">
            Display 3
          </Text>
          <Text mdcStyle="display2" component="h3">
            Display 2
          </Text>
          <Text mdcStyle="display1" component="h4">
            Display 1
          </Text>
          <Text mdcStyle="headline" component="h1">
            Headline
          </Text>
          <Text mdcStyle="title" component="h2">
            Title{' '}
            <Text mdcStyle="caption" component="span">
              Caption
            </Text>
          </Text>
          <Text mdcStyle="subheading2" component="h2">
            Subheading 2
          </Text>
          <Text mdcStyle="subheading1" component="h3">
            Subheading 1
          </Text>
          <Text mdcStyle="body1" component="p">
            Body1 paragrapah. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </Text>
          <Text mdcStyle="body2" component="p">
            Body 2 text, calling something out.
          </Text>
        </div>

        <Text mdcStyle="display2" component="h4">
          Styles with margin adjustments
        </Text>

        <Highlight>{textStylesAdjust}</Highlight>

        <div>
          <Text mdcStyle="display4" component="h1" adjustMargin>
            Display 4
          </Text>
          <Text mdcStyle="display3" component="h2" adjustMargin>
            Display 3
          </Text>
          <Text mdcStyle="display2" component="h3" adjustMargin>
            Display 2
          </Text>
          <Text mdcStyle="display1" component="h4" adjustMargin>
            Display 1
          </Text>
          <Text mdcStyle="headline" component="h1" adjustMargin>
            Headline
          </Text>
          <Text mdcStyle="title" component="h2" adjustMargin>
            Title{' '}
            <Text mdcStyle="caption" component="span" adjustMargin>
              Caption
            </Text>
          </Text>
          <Text mdcStyle="subheading2" component="h2" adjustMargin>
            Subheading 2
          </Text>
          <Text mdcStyle="subheading1" component="h3" adjustMargin>
            Subheading 1
          </Text>
          <Text mdcStyle="body1" component="p" adjustMargin>
            Body1 paragrapah. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </Text>
          <Text mdcStyle="body2" component="p" adjustMargin>
            Body 2 text, calling something out.
          </Text>
        </div>
      </LayoutCell>
    );
  }
}
