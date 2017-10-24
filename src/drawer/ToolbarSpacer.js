// @flow
import * as React from 'react';

type Props = {
  type: 'temporary' | 'persistent' | 'permanent',
};

const DrawerToolbarSpacer = ({ type, ...rest }: Props) => (
  <div {...rest} className={`mdc-${type}-drawer__toolbar-spacer`} />
);

export default DrawerToolbarSpacer;
