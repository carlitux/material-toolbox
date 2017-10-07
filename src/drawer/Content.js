// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from '@material/drawer/mdc-drawer.scss';

type Props = {
  children: React.Element<any>,
  type: 'temporary' | 'persistent' | 'permanent',
};

const DrawerContent = ({ type, children, ...rest }: Props) => {
  const composedClassName = classnames(styles[`mdc-${type}-drawer__content`]);

  return React.cloneElement(children, {
    ...rest,
    className: composedClassName,
  });
};

export default DrawerContent;
