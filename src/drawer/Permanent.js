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
  const className = classnames('mdc-permanent-drawer', 'mdc-typography');
  return (
    <nav {...rest} className={className}>
      {React.Children.map(children, child => (
        <child.type {...child.props} type="permanent" />
      ))}
    </nav>
  );
};

export default PermanentDrawer;
