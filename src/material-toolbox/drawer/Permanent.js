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
  className?: string,
};

const PermanentDrawer = ({ className, children, ...rest }: Props) => {
  const allClasses = classnames(
    'mdc-drawer',
    'mdc-drawer--permanent',
    className,
  );

  return (
    <nav {...rest} className={allClasses}>
      {children}
    </nav>
  );
};

PermanentDrawer.defaultProps = {
  className: undefined,
};

export default PermanentDrawer;
