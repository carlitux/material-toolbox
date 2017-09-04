// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

type Props = {
  children: React.Element<any>,
  className: string,
};

const TypographyWrapper = ({ children, className, ...rest }: Props) => {
  const composedClassName = classnames(styles['mdc-typography'], className);

  return React.cloneElement(children, {
    ...rest,
    className: composedClassName,
  });
};

export default TypographyWrapper;
