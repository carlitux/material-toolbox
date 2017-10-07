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

const fontCode = `<head>
  <link
    href="https://fonts.googleapis.com/css?family='Roboto:300,400,500"
    rel="stylesheet"
    >
</head>
`;

const sassExample = `@import '@material/typography/mdc-typography';

html, body {
  @include mdc-typography-base;
}

p {
  @include mdc-typography(body1);
}
`;

const importComponents = `import { Typography, Text } from 'material-toolbox/typography';`;

const textStyles = `<Typography>
    <Text textStyle="display4" component="h1">Display 4</Text>
    <Text textStyle="display3" component="h2">Display 3</Text>
    <Text textStyle="display2" component="h3">Display 2</Text>
    <Text textStyle="display1" component="h4">Display 1</Text>
    <Text textStyle="headline" component="h1">Headline</Text>
    <Text textStyle="title" component="h2">
      Title <Text textStyle="caption" component="span">Caption</Text>
    </Text>
    <Text textStyle="subheading2" component="h2">Subheading 2</Text>
    <Text textStyle="subheading1" component="h3">Subheading 1</Text>
    <Text textStyle="body1" component="p">
      Body1 paragrapah. Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </Text>
    <Text textStyle="body2" component="p">
      Body 2 text, calling something out.
    </Text>
  </Typography>
`;

const textStylesAdjust = `<Typography>
    <Text textStyle="display4" component="h1" adjustMargin>Display 4</Text>
    <Text textStyle="display3" component="h2" adjustMargin>Display 3</Text>
    <Text textStyle="display2" component="h3" adjustMargin>Display 2</Text>
    <Text textStyle="display1" component="h4" adjustMargin>Display 1</Text>
    <Text textStyle="headline" component="h1" adjustMargin>Headline</Text>
    <Text textStyle="title" component="h2" adjustMargin>
      Title <Text textStyle="caption" component="span" adjustMargin>Caption</Text>
    </Text>
    <Text textStyle="subheading2" component="h2" adjustMargin>Subheading 2</Text>
    <Text textStyle="subheading1" component="h3" adjustMargin>Subheading 1</Text>
    <Text textStyle="body1" component="p" adjustMargin>
      Body1 paragrapah. Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </Text>
    <Text textStyle="body2" component="p" adjustMargin>
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
        <Text component="h1" textStyle="display1">
          Typography
        </Text>

        <Text component="h2" textStyle="headline">
          Typography component is a React wrapper of mdc-typography component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/style/typography.html"
            target="_blank">
            Material Design guidelines: Typography
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/typography/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h3" textStyle="title">
          Load Roboto
        </Text>

        <Highlighter language="html">{fontCode}</Highlighter>

        <Text component="h3" textStyle="title">
          Mixin Usage (Optional)
        </Text>

        <Highlighter language="css">{sassExample}</Highlighter>

        <Text component="h1" textStyle="display1">
          React components
        </Text>

        <Text component="h3" textStyle="title">
          Import
        </Text>

        <Highlighter language="javascript">{importComponents}</Highlighter>

        <Text component="h3" textStyle="title">
          Typography
        </Text>

        <p>
          HOC container of typography components. Every typography texts should
          be included into this component.
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

        <Text component="h2" textStyle="title">
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
              <td>textStyle</td>
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
              <td>
                Positions text, used in conjunction with font classes above
              </td>
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
              <td>React.ElementType&lt;any&gt;</td>
              <td>span</td>
              <td />
              <td>Component that will be rendered</td>
            </tr>
          </tbody>
        </table>

        <Text textStyle="title" component="h2">
          Styles
        </Text>

        <Highlighter language="html">{textStyles}</Highlighter>

        <div>
          <Text textStyle="display4" component="h1">
            Display 4
          </Text>
          <Text textStyle="display3" component="h2">
            Display 3
          </Text>
          <Text textStyle="display2" component="h3">
            Display 2
          </Text>
          <Text textStyle="display1" component="h4">
            Display 1
          </Text>
          <Text textStyle="headline" component="h1">
            Headline
          </Text>
          <Text textStyle="title" component="h2">
            Title{' '}
            <Text textStyle="caption" component="span">
              Caption
            </Text>
          </Text>
          <Text textStyle="subheading2" component="h2">
            Subheading 2
          </Text>
          <Text textStyle="subheading1" component="h3">
            Subheading 1
          </Text>
          <Text textStyle="body1" component="p">
            Body1 paragrapah. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </Text>
          <Text textStyle="body2" component="p">
            Body 2 text, calling something out.
          </Text>
        </div>

        <Text textStyle="title" component="h2">
          Styles with margin adjustments
        </Text>

        <Highlighter language="html">{textStylesAdjust}</Highlighter>

        <div>
          <Text textStyle="display4" component="h1" adjustMargin>
            Display 4
          </Text>
          <Text textStyle="display3" component="h2" adjustMargin>
            Display 3
          </Text>
          <Text textStyle="display2" component="h3" adjustMargin>
            Display 2
          </Text>
          <Text textStyle="display1" component="h4" adjustMargin>
            Display 1
          </Text>
          <Text textStyle="headline" component="h1" adjustMargin>
            Headline
          </Text>
          <Text textStyle="title" component="h2" adjustMargin>
            Title{' '}
            <Text textStyle="caption" component="span" adjustMargin>
              Caption
            </Text>
          </Text>
          <Text textStyle="subheading2" component="h2" adjustMargin>
            Subheading 2
          </Text>
          <Text textStyle="subheading1" component="h3" adjustMargin>
            Subheading 1
          </Text>
          <Text textStyle="body1" component="p" adjustMargin>
            Body1 paragrapah. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </Text>
          <Text textStyle="body2" component="p" adjustMargin>
            Body 2 text, calling something out.
          </Text>
        </div>
      </LayoutCell>
    );
  }
}
