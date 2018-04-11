// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
};

const DrawerContent = ({ children, className }: Props) => {
  const composedClassName = classnames(className, 'mdc-drawer__content');

  return React.Children.map(children, child => (
    <child.type {...child.props} className={composedClassName} />
  ));
};

export default DrawerContent;
