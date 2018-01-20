// @flow
import * as React from 'react';
import classnames from 'classnames';

import DrawerContent from './Content';
import DrawerToolbarSpacer from './ToolbarSpacer';
import DrawerHeader from './Header';

type ContentType = React.Element<
  typeof DrawerContent | typeof DrawerToolbarSpacer | typeof DrawerHeader,
>;

type Props = {
  children: React.ChildrenArray<ContentType> | ContentType,
};

const PermanentDrawer = ({ children, ...rest }: Props) => {
  const className = classnames('mdc-drawer', 'mdc-drawer--permanent');

  return (
    <nav {...rest} className={className}>
      {children}
    </nav>
  );
};

export default PermanentDrawer;
