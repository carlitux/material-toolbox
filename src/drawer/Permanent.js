// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
};

const PermanentDrawer = ({ children }: Props) => {
  const className = classnames('mdc-permanent-drawer', 'mdc-typography');
  return <nav className={className}>{children}</nav>;
};

export default PermanentDrawer;
