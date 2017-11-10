// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  type: 'temporary' | 'persistent' | 'permanent',
  className: string,
};

const DrawerToolbarSpacer = ({ type, className, ...rest }: Props) => (
  <div
    {...rest}
    className={classnames(className, `mdc-${type}-drawer__toolbar-spacer`)}
  />
);

export default DrawerToolbarSpacer;
