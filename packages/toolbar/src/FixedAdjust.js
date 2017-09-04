// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

type Props = {
  children: React.Element<any>,
  className: string,
};

const ToolbarFixedAdjust = ({ children, className, ...rest }: Props) => {
  const composedClassName = classnames(
    styles['mdc-toolbar-fixed-adjust'],
    className,
  );

  return React.cloneElement(children, {
    ...rest,
    className: composedClassName,
  });
};

export default ToolbarFixedAdjust;
