// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  tag: 'a' | 'span' | 'button',
  isMenu: boolean,
  children: React.Node,
  className: string,
};

const ToolbarIcon = ({
  tag: Component,
  children,
  isMenu,
  className,
  ...rest
}: Props) => {
  const cn = classnames(className, {
    'mdc-toolbar__menu-icon': isMenu,
    'mdc-toolbar__icon': !isMenu,
  });

  return (
    <Component {...rest} className={cn}>
      {children}
    </Component>
  );
};

ToolbarIcon.defaultProps = {
  tag: 'a', // eslint-disable-line
};

export default ToolbarIcon;
