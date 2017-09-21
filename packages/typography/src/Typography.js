// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

type Props = {
  children: React.Element<any>,
  className: string,
};

const Typography = ({ children, className, ...rest }: Props) => {
  const composedClassName = classnames(
    styles['mdc-typography'],
    className,
    children ? children.props.className : '',
  );

  return React.cloneElement(children, {
    ...rest,
    className: composedClassName,
  });
};

export default Typography;
