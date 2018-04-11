// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  drawerType: 'temporary' | 'persistent' | 'permanent',
  className: string,
};

const DrawerToolbarSpacer = ({ drawerType, className, ...rest }: Props) => (
  <div
    {...rest}
    className={classnames(className, 'mdc-drawer__toolbar-spacer')}
  />
);

export default DrawerToolbarSpacer;
