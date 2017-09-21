// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

type Props = {
  children: React.Element<any>,
  className: string,
};

const Typography = ({ children, className }: Props) => {
  const composedClassName = classnames(
    styles['mdc-typography'],
    className,
    children ? children.props.className : '',
  );

  return React.cloneElement(children, {
    className: composedClassName,
  });
};

export default Typography;
