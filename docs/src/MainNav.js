// @flow

/* eslint-disable */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListDetail } from 'material-toolbox/list';

const rawNav = {
  home: {
    label: 'Home',
    to: '/',
    disabled: false,
  },
  animation: {
    label: 'Animation',
    to: '/animation',
    disabled: false,
  },
  buttons: {
    label: 'Buttons',
    to: '/buttons',
    disabled: false,
    children: {
      floating: {
        label: 'Floating Action Button',
        to: '/buttons/floating',
        disabled: true,
      },
      icons: {
        label: 'Icon Toggle Buttons',
        to: '/buttons/icons',
        disabled: true,
      },
    },
  },
  cards: {
    label: 'Cards',
    to: '/cards',
    disabled: true,
  },
  dialogs: {
    label: 'Dialogs',
    to: '/dialogs',
    disabled: true,
  },
  drawers: {
    label: 'Drawers',
    to: '/drawers',
    disabled: false,
  },
  elevation: {
    label: 'Elevations',
    to: '/elevation',
    disabled: false,
  },
  gridList: {
    label: 'Grid Lists',
    to: '/grid-lists',
    disabled: true,
  },
  inputs: {
    label: 'Inputs and Controls',
    to: '/inputs-controls',
    disabled: true,
    children: {
      checkboxes: {
        label: 'Checkboxes',
        to: '/inputs-controls/checkboxes',
        disabled: true,
      },
      forms: {
        label: 'Form Fields',
        to: '/inputs-controls/form-fields',
        disabled: true,
      },
      radio: {
        label: 'Radio Buttons',
        to: '/inputs-controls/radio-buttons',
        disabled: true,
      },
      select: {
        label: 'Select Menus',
        to: '/inputs-controls/select-menus',
        disabled: true,
      },
      sliders: {
        label: 'Sliders',
        to: '/inputs-controls/sliders',
        disabled: true,
      },
      switches: {
        label: 'Switches',
        to: '/inputs-controls/switches',
        disabled: true,
      },
      text: {
        label: 'Text Fields',
        to: '/inputs-controls/text-fields',
        disabled: true,
      },
    },
  },
  layout: {
    label: 'Layout Grid',
    to: '/layout-grid',
    disabled: false,
  },
  progress: {
    label: 'Linear Progress',
    to: '/linear-progress',
    disabled: true,
  },
  lists: {
    label: 'Lists',
    to: '/lists',
    disabled: false,
  },
  menus: {
    label: 'Menus',
    to: '/ripples',
    disabled: true,
  },
  ripples: {
    label: 'Ripples',
    to: '/ripples',
    disabled: false,
  },
  rtl: {
    label: 'RTL',
    to: '/rtl',
    disabled: true,
  },
  stackbar: {
    label: 'Snackbars',
    to: '/snackbars',
    disabled: true,
  },
  tabs: {
    label: 'Tabs',
    to: '/tabs',
    disabled: true,
  },
  theme: {
    label: 'Theme',
    to: '/theme',
    disabled: false,
  },
  toolbars: {
    label: 'Toolbars',
    to: '/toolbars',
    disabled: true,
  },
  typography: {
    label: 'Typography',
    to: '/typography',
    disabled: false,
  },
};

type State = {
  selectedMenu: ?string,
};

export default class MainNav extends React.Component<{}, State> {
  state = {
    selectedMenu: null,
  };

  showSubmenu(menu: string) {
    this.setState({ selectedMenu: menu });
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
        disabled={currentNav[item].disabled}
        ripple>
        {currentNav[item].label}
        {currentNav[item].children && (
          <ListDetail
            style={{ cursor: 'pointer' }}
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
