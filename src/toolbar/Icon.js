// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  tag: 'a' | 'span' | 'button',
  icon: string,
  isMenu: boolean,
};

const ToolbarIcon = ({ tag, icon, isMenu, ...rest }: Props) => {
  const className = classnames('material-icons', {
    'mdc-toolbar__icon--menu': isMenu,
    'mdc-toolbar__icon': !isMenu,
  });

  return React.createElement(tag, { ...rest, className }, icon);
};

ToolbarIcon.defaultProps = {
  tag: 'a',
  icon: 'menu',
  isMenu: false,
};

export default ToolbarIcon;
