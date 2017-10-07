// @flow
import * as React from 'react';

type Props = {
  children: React.Element<any>,
  type: 'temporary' | 'persistent' | 'permanent',
};

const DrawerContent = ({ type, children, ...rest }: Props) => {
  const composedClassName = `mdc-${type}-drawer__content`;

  return React.cloneElement(children, {
    ...rest,
    className: composedClassName,
  });
};

export default DrawerContent;
