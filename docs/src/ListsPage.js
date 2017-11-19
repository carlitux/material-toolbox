// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import { List, ListItem, ListDetail, ListText, ListGroup, ListSubheader } from 'material-toolbox/list';
import Theme from 'material-toolbox/theme';
import Ripple from 'material-toolbox/ripple';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import { List, ListItem, ListDetail, ListText, ListGroup, ListSubheader } from 'material-toolbox/list';`;

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
          List components are React wrappers of mdc-list components.
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

        <Text component="h2" textStyle="title">
          List
        </Text>

        <p>
          This is a react wrapper for mdc-list list. It must only contain any
          ListItem components.
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
              <td>component</td>
              <td>React.ComponentType&lt;any&gt;</td>
              <td>ul</td>
              <td />
              <td>Component type that will be rendered.</td>
            </tr>
            <tr>
              <td>dark</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Render List with dark theme.</td>
            </tr>
            <tr>
              <td>dense</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Render in dense mode.</td>
            </tr>
            <tr>
              <td>twoLines</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>
                Render in two lines mode, ListText component must be used inside
                ListItem component.
              </td>
            </tr>
            <tr>
              <td>withAvatar</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Change styles for ListDetail with the start option.</td>
            </tr>
          </tbody>
        </table>

        <Text component="h2" textStyle="title">
          ListItem
        </Text>

        <p>
          This is a react wrapper for mdc-list item. It can contain any React
          component as well ListDetail, ListText.
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
              <td>component</td>
              <td>React.ComponentType&lt;any&gt;</td>
              <td>li</td>
              <td />
              <td>Component type that will be rendered.</td>
            </tr>
            <tr>
              <td>devider</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Render divider item.</td>
            </tr>
            <tr>
              <td>inset</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Render as inset if this is a divider item.</td>
            </tr>
          </tbody>
        </table>

        <Text component="h2" textStyle="title">
          ListText
        </Text>

        <p>
          This is a react wrapper for mdc-list Text. It can contain any React
          component as well ListDetail, ListText.
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
              <td>component</td>
              <td>React.ComponentType&lt;any&gt;</td>
              <td>span</td>
              <td />
              <td>Component type that will be rendered.</td>
            </tr>
            <tr>
              <td>secondary</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Render text component as secondary text.</td>
            </tr>
          </tbody>
        </table>

        <Text component="h2" textStyle="title">
          ListDetail
        </Text>

        <p>
          This is a react wrapper for mdc-list Detail. It can contain any React
          component. It can be start or end detail.
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
              <td>component</td>
              <td>React.ComponentType&lt;any&gt;</td>
              <td />
              <td>✔</td>
              <td>Component type that will be rendered.</td>
            </tr>
            <tr>
              <td>end</td>
              <td>boolean</td>
              <td>false</td>
              <td />
              <td>Render detail component as end detail.</td>
            </tr>
          </tbody>
        </table>

        <Text component="h2" textStyle="title">
          ListGroup
        </Text>

        <p>
          This is a react wrapper for mdc-list Group. It muat contain List,
          ListSubheader and ListItem components
        </p>

        <Text component="h2" textStyle="title">
          ListSubheader
        </Text>

        <p>
          This is a react wrapper for mdc-list Subheader. It can contain any
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
              <td>component</td>
              <td>React.ComponentType&lt;any&gt;</td>
              <td>h3</td>
              <td />
              <td>Component type that will be rendered.</td>
            </tr>
          </tbody>
        </table>

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
          <strong id="toggle-rtl">Checkbox should be created here</strong>
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
          <section className={styles['mdc-theme--dark']}>
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
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Start Detail (dense)
            </Text>

            <List dense>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Start Detail Example - Icon with Text
            </Text>

            <List>
              <ListItem>
                <ListDetail component="i" className="material-icons">
                  network_wifi
                </ListDetail>Wi-Fi
              </ListItem>
              <ListItem>
                <ListDetail component="i" className="material-icons">
                  bluetooth
                </ListDetail>Bluetooth
              </ListItem>
              <ListItem>
                <ListDetail component="i" className="material-icons">
                  data_usage
                </ListDetail>Data Usage
              </ListItem>
            </List>
          </section>
          <section className={styles['mdc-theme--dark']}>
            <Theme textStyle="primary" textOn="primary">
              <Text component="h3" textStyle="title">
                Start Detail Example - Icon with Text (Dark)
              </Text>
            </Theme>
            <List>
              <ListItem>
                <ListDetail
                  component="i"
                  className="material-icons"
                  aria-hidden>
                  network_wifi
                </ListDetail>Wi-Fi
              </ListItem>
              <ListItem>
                <ListDetail component="i" className="material-icons">
                  bluetooth
                </ListDetail>Bluetooth
              </ListItem>
              <ListItem>
                <ListDetail component="i" className="material-icons">
                  data_usage
                </ListDetail>Data Usage
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Avatar List
            </Text>

            <List withAvatar>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Avatar List (dense)
            </Text>

            <List withAvatar dense>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Example - Avatar with Text
            </Text>

            <List withAvatar>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal1.svg"
                  alt="Panda"
                />Panda
              </ListItem>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal2.svg"
                  alt="Sleuth"
                />Sleuth
              </ListItem>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal3.svg"
                  alt="Brown Bear"
                />Brown Bear
              </ListItem>
            </List>
          </section>
          <section className={styles['mdc-theme--dark']}>
            <Theme textStyle="primary" textOn="primary">
              <Text component="h3" textStyle="title">
                Example - Avatar with Text (Dark)
              </Text>
            </Theme>

            <List withAvatar>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal1.svg"
                  alt="Panda"
                />Panda
              </ListItem>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal2.svg"
                  alt="Sleuth"
                />Sleuth
              </ListItem>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal3.svg"
                  alt="Brown Bear"
                />Brown Bear
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              End Detail
            </Text>

            <List>
              <ListItem>
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              End Detail (Dense)
            </Text>

            <List dense>
              <ListItem>
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Avatar + End Detail
            </Text>

            <List withAvatar>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Avatar + End Detail (Dense)
            </Text>

            <List withAvatar dense>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                Single-line item{' '}
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
            </List>
          </section>
          <section className={styles['avatar-text-icon-demo-list']}>
            <Text component="h3" textStyle="title">
              Example - Avatar with Text and icon
            </Text>

            <List withAvatar>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal1.svg"
                  alt="Panda"
                />Panda
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="Remove from favorites"
                  title="Remove from favorites"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  favorite
                </ListDetail>
              </ListItem>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal2.svg"
                  alt="Sleuth"
                />Sleuth
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="Add from favorites"
                  title="Add from favorites"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  favorite_border
                </ListDetail>
              </ListItem>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal3.svg"
                  alt="Brown Bear"
                />Brown Bear
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="Add from favorites"
                  title="Add from favorites"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  favorite_border
                </ListDetail>
              </ListItem>
            </List>
          </section>
          <section
            className={`${styles['avatar-text-icon-demo-list']} ${
              styles['mdc-theme--dark']
            }`}>
            <Theme textStyle="primary" textOn="primary">
              <Text component="h3" textStyle="title">
                Example - Avatar with Text and icon (Dark)
              </Text>
            </Theme>
            <Text component="h3" textStyle="title" />
            <List withAvatar>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal1.svg"
                  alt="Panda"
                />Panda
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="Remove from favorites"
                  title="Remove from favorites"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  favorite
                </ListDetail>
              </ListItem>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal2.svg"
                  alt="Sleuth"
                />Sleuth
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="Add from favorites"
                  title="Add from favorites"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  favorite_border
                </ListDetail>
              </ListItem>
              <ListItem>
                <ListDetail
                  component="img"
                  src="http://material-components-web.appspot.com/images/animal3.svg"
                  alt="Brown Bear"
                />Brown Bear
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="Add from favorites"
                  title="Add from favorites"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  favorite_border
                </ListDetail>
              </ListItem>
            </List>
          </section>
        </section>

        <section className={styles['list-demo-wrapper']}>
          <Text component="h1" textStyle="display1">
            Two-line List
          </Text>
          <section>
            <Text component="h3" textStyle="title">
              Text-Only
            </Text>

            <List twoLines>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Text-Only (Dense)
            </Text>

            <List twoLines dense>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Start Detail
            </Text>

            <List twoLines>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Start Detail (dense)
            </Text>

            <List twoLines dense>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Avatar List
            </Text>

            <List twoLines withAvatar>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Avatar List (dense)
            </Text>

            <List twoLines dense withAvatar>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              End Detail
            </Text>

            <List twoLines>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              End Detail (dense)
            </Text>

            <List twoLines dense>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
              <ListItem>
                <ListText>
                  Two-line item<ListText secondary>Secondary text</ListText>
                </ListText>
                <ListDetail
                  component="span"
                  className={styles['grey-bg']}
                  end
                />
              </ListItem>
            </List>
          </section>

          <section>
            <Text component="h3" textStyle="title">
              Example - Two-line avatar + text + icon
            </Text>

            <List
              twoLines
              withAvatar
              className={styles['two-line-avatar-text-icon-demo']}>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']}>
                  <i className="material-icons" aria-hidden="true">
                    folder
                  </i>
                </ListDetail>
                <ListText>
                  Photos<ListText secondary>Jan 9, 2014</ListText>
                </ListText>
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="View more information"
                  title="More info"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  info
                </ListDetail>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']}>
                  <i className="material-icons" aria-hidden="true">
                    folder
                  </i>
                </ListDetail>
                <ListText>
                  Recipes<ListText secondary>Jan 17, 2014</ListText>
                </ListText>
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="View more information"
                  title="More info"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  info
                </ListDetail>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']}>
                  <i className="material-icons" aria-hidden="true">
                    folder
                  </i>
                </ListDetail>
                <ListText>
                  Work<ListText secondary>Jan 28, 2014</ListText>
                </ListText>
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="View more information"
                  title="More info"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  info
                </ListDetail>
              </ListItem>
            </List>
          </section>
          <section className={styles['mdc-theme--dark']}>
            <Theme textStyle="primary" textOn="primary">
              <Text component="h3" textStyle="title">
                Example - Two-line avatar + text + icon (Dark)
              </Text>
            </Theme>

            <List
              twoLines
              withAvatar
              className={styles['two-line-avatar-text-icon-demo']}>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']}>
                  <i className="material-icons" aria-hidden="true">
                    folder
                  </i>
                </ListDetail>
                <ListText>
                  Photos<ListText secondary>Jan 9, 2014</ListText>
                </ListText>
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="View more information"
                  title="More info"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  info
                </ListDetail>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']}>
                  <i className="material-icons" aria-hidden="true">
                    folder
                  </i>
                </ListDetail>
                <ListText>
                  Recipes<ListText secondary>Jan 17, 2014</ListText>
                </ListText>
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="View more information"
                  title="More info"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  info
                </ListDetail>
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']}>
                  <i className="material-icons" aria-hidden="true">
                    folder
                  </i>
                </ListDetail>
                <ListText>
                  Work<ListText secondary>Jan 28, 2014</ListText>
                </ListText>
                <ListDetail
                  component="a"
                  className="material-icons"
                  href="#"
                  arial-label="View more information"
                  title="More info"
                  onClick={event => {
                    event.preventDefault();
                  }}
                  end>
                  info
                </ListDetail>
              </ListItem>
            </List>
          </section>
        </section>

        <section className={styles['list-demo-wrapper']}>
          <Text component="h1" textStyle="display1">
            List Dividers
          </Text>
          <section>
            <Text component="h3" textStyle="title">
              Full-Width Dividers
            </Text>

            <List>
              <ListItem>Single-line item - section 1</ListItem>
              <ListItem>Single-line item - section 1</ListItem>
              <ListItem>Single-line item - section 1</ListItem>
              <ListItem devider />
              <ListItem>Single-line item - section 2</ListItem>
              <ListItem>Single-line item - section 2</ListItem>
            </List>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Inset Dividers
            </Text>

            <List withAvatar>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item - section 1
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item - section 1
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item - section 1
              </ListItem>
              <ListItem devider inset />
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item - section 2
              </ListItem>
              <ListItem>
                <ListDetail component="span" className={styles['grey-bg']} />Single-line
                item - section 2
              </ListItem>
            </List>
          </section>
        </section>

        <section className={styles['list-demo-wrapper']}>
          <Text component="h1" textStyle="display1">
            List Groups
          </Text>
          <section>
            <Text component="h3" textStyle="title">
              Basic Usage
            </Text>

            <ListGroup>
              <ListSubheader>List 1</ListSubheader>
              <List>
                <ListItem>Single-line item - section 1</ListItem>
                <ListItem>Single-line item - section 1</ListItem>
                <ListItem>Single-line item - section 1</ListItem>
              </List>

              <ListItem component="hr" devider />

              <ListSubheader>List 2</ListSubheader>
              <List>
                <ListItem>Single-line item - section 1</ListItem>
                <ListItem>Single-line item - section 2</ListItem>
                <ListItem>Single-line item - section 2</ListItem>
              </List>
            </ListGroup>
          </section>
          <section>
            <Text component="h3" textStyle="title">
              Example - Two-line Lists, Avatars, end detail, inset dividers
            </Text>

            <ListGroup>
              <ListSubheader>Folders</ListSubheader>

              <List
                twoLines
                withAvatar
                className={styles['two-line-avatar-text-icon-demo']}>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      folder
                    </i>
                  </ListDetail>
                  <ListText>
                    Photos<ListText secondary>Jan 9, 2014</ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      folder
                    </i>
                  </ListDetail>
                  <ListText>
                    Recipes<ListText secondary>Jan 17, 2014</ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      folder
                    </i>
                  </ListDetail>
                  <ListText>
                    Work<ListText secondary>Jan 28, 2014</ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
              </List>

              <ListItem component="hr" devider />

              <ListSubheader>Files</ListSubheader>

              <List
                twoLines
                withAvatar
                className={styles['two-line-avatar-text-icon-demo']}>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      insert_drive_file
                    </i>
                  </ListDetail>
                  <ListText>
                    Vacation Itinerary<ListText secondary>
                      Jan 10, 2014
                    </ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      insert_drive_file
                    </i>
                  </ListDetail>
                  <ListText>
                    Kitchen Remodel<ListText secondary>Jan 20, 2014</ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
              </List>
            </ListGroup>
          </section>
          <section className={styles['mdc-theme--dark']}>
            <Theme textStyle="primary" textOn="primary">
              <Text component="h3" textStyle="title">
                Example - Two-line Lists, Avatars, end detail, inset dividers
                (Dark)
              </Text>
            </Theme>

            <ListGroup>
              <ListSubheader>Folder</ListSubheader>

              <List
                twoLines
                withAvatar
                className={styles['two-line-avatar-text-icon-demo']}>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      folder
                    </i>
                  </ListDetail>
                  <ListText>
                    Photos<ListText secondary>Jan 9, 2014</ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      folder
                    </i>
                  </ListDetail>
                  <ListText>
                    Recipes<ListText secondary>Jan 17, 2014</ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      folder
                    </i>
                  </ListDetail>
                  <ListText>
                    Work<ListText secondary>Jan 28, 2014</ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
              </List>

              <ListItem component="hr" devider />

              <ListSubheader>Files</ListSubheader>

              <List
                twoLines
                withAvatar
                className={styles['two-line-avatar-text-icon-demo']}>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      insert_drive_file
                    </i>
                  </ListDetail>
                  <ListText>
                    Vacation Itinerary<ListText secondary>
                      Jan 10, 2014
                    </ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
                <ListItem>
                  <ListDetail component="span" className={styles['grey-bg']}>
                    <i className="material-icons" aria-hidden="true">
                      insert_drive_file
                    </i>
                  </ListDetail>
                  <ListText>
                    Kitchen Remodel<ListText secondary>Jan 20, 2014</ListText>
                  </ListText>
                  <ListDetail
                    component="a"
                    className="material-icons"
                    href="#"
                    arial-label="View more information"
                    title="More info"
                    onClick={event => {
                      event.preventDefault();
                    }}
                    end>
                    info
                  </ListDetail>
                </ListItem>
              </List>
            </ListGroup>
          </section>
        </section>

        <section className={styles['list-demo-wrapper']}>
          <Text component="h1" textStyle="display1">
            Interactive Lists (with ink ripple)
          </Text>
          <section>
            <Text component="h3" textStyle="title">
              Example - Interactive List
            </Text>

            <List component="nav">
              <ListItem
                ripple
                component="a"
                href="#"
                onClick={event => {
                  event.preventDefault();
                }}>
                <ListDetail component="i" className="material-icons">
                  network_wifi
                </ListDetail>Wi-Fi
              </ListItem>
              <ListItem
                ripple
                component="a"
                href="#"
                onClick={event => {
                  event.preventDefault();
                }}>
                <ListDetail component="i" className="material-icons">
                  bluetooth
                </ListDetail>Bluetooth
              </ListItem>
              <ListItem
                ripple
                component="a"
                href="#"
                onClick={event => {
                  event.preventDefault();
                }}>
                <ListDetail component="i" className="material-icons">
                  data_usage
                </ListDetail>Data Usage
              </ListItem>
            </List>
          </section>
          <section className={styles['mdc-theme--dark']}>
            <Theme textStyle="primary" textOn="primary">
              <Text component="h3" textStyle="title">
                Example - Interactive List (Dark Theme)
              </Text>
            </Theme>
            <List component="nav">
              <ListItem
                ripple
                component="a"
                href="#"
                onClick={event => {
                  event.preventDefault();
                }}>
                <ListDetail
                  component="i"
                  className="material-icons"
                  aria-hidden>
                  network_wifi
                </ListDetail>Wi-Fi
              </ListItem>
              <ListItem
                ripple
                component="a"
                href="#"
                onClick={event => {
                  event.preventDefault();
                }}>
                <ListDetail component="i" className="material-icons">
                  bluetooth
                </ListDetail>Bluetooth
              </ListItem>
              <ListItem
                ripple
                component="a"
                href="#"
                onClick={event => {
                  event.preventDefault();
                }}>
                <ListDetail component="i" className="material-icons">
                  data_usage
                </ListDetail>Data Usage
              </ListItem>
            </List>
          </section>
        </section>
      </LayoutCell>
    );
  }
}
