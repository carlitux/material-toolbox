// @flow

/* eslint-disable */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListDetail } from 'material-toolbox/list';

const rawNav = {
  home: {
    label: 'Home',
    to: '/',
  },
  animation: {
    label: 'Animation',
    to: '/animation',
  },
  buttons: {
    label: 'Buttons',
    to: '/buttons',
    children: {
      floating: {
        label: 'Floating Action Button',
        to: '/buttons/floating',
      },
      icons: {
        label: 'Icon Toggle Buttons',
        to: '/buttons/icons',
      },
    },
  },
  cards: {
    label: 'Cards',
    to: '/cards',
  },
  dialogs: {
    label: 'Dialogs',
    to: '/dialogs',
  },
  drawers: {
    label: 'Drawers',
    to: '/drawers',
  },
  elevation: {
    label: 'Elevations',
    to: '/elevation',
  },
  gridList: {
    label: 'Grid Lists',
    to: '/grid-lists',
  },
  inputs: {
    label: 'Inputs and Controls',
    to: '/inputs-controls',
    children: {
      checkboxes: {
        label: 'Checkboxes',
        to: '/inputs-controls/checkboxes',
      },
      forms: {
        label: 'Form Fields',
        to: '/inputs-controls/form-fields',
      },
      radio: {
        label: 'Radio Buttons',
        to: '/inputs-controls/radio-buttons',
      },
      select: {
        label: 'Select Menus',
        to: '/inputs-controls/select-menus',
      },
      sliders: {
        label: 'Sliders',
        to: '/inputs-controls/sliders',
      },
      switches: {
        label: 'Switches',
        to: '/inputs-controls/switches',
      },
      text: {
        label: 'Text Fields',
        to: '/inputs-controls/text-fields',
      },
    },
  },
  layout: {
    label: 'Layout Grid',
    to: '/layout-grid',
  },
  progress: {
    label: 'Linear Progress',
    to: '/linear-progress',
  },
  lists: {
    label: 'Lists',
    to: '/lists',
  },
  menus: {
    label: 'Menus',
    to: '/menus',
  },
  ripples: {
    label: 'Ripples',
    to: '/ripples',
  },
  rtl: {
    label: 'RTL',
    to: '/rtl',
  },
  stackbar: {
    label: 'Snackbars',
    to: '/snackbars',
  },
  tabs: {
    label: 'Tabs',
    to: '/tabs',
  },
  theme: {
    label: 'Theme',
    to: '/theme',
  },
  toolbars: {
    label: 'Toolbars',
    to: '/toolbars',
  },
  typography: {
    label: 'Typography',
    to: '/typography',
  },
};

type State = {
  selectedMenu: ?string,
};

export default class MainNav extends React.Component<{}, State> {
  state = {
    selectedMenu: null,
  };

  showSubmenu(menu: string, event: Event) {
    this.setState({ selectedMenu: menu });
    event.preventDefault();
  }

  goBack = () => {
    this.setState({ selectedMenu: null });
  }

  render() {
    const currentNav = this.state.selectedMenu
      ? rawNav[this.state.selectedMenu].children
      : rawNav;

    const items = Object.keys(currentNav).map(item => (
      <ListItem
        component={currentNav[item].disabled ? 'span' : Link}
        to={currentNav[item].to}
        key={item}
        >
        {currentNav[item].label}
        {currentNav[item].children && (
          <ListDetail
            style={{ cursor: 'pointer', zIndex: 100 }}
            onClick={this.showSubmenu.bind(this, item)}
            component="i"
            className="material-icons"
            end>
            arrow_forward
          </ListDetail>
        )}
      </ListItem>
    ));

    if (this.state.selectedMenu) {
      items.unshift(<ListItem key="back" style={{ cursor: 'pointer' }} onClick={this.goBack} ripple>
        <ListDetail component="i" className="material-icons">
          arrow_back
        </ListDetail>
        Go Back
      </ListItem>);
    }

    return (
      <List component="nav">
        {items}
      </List>
    );
  }
}
