// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
  type: 'temporary' | 'persistent' | 'permanent',
};

const DrawerToolbarSpacer = ({ type, children }: Props) => (
  <div className={`mdc-${type}-drawer__toolbar-spacer`}>{children}</div>
);

export default DrawerToolbarSpacer;
