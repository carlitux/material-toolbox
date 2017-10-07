// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from '@material/toolbar/mdc-toolbar.scss';

type Props = {
  children: React.Element<any>,
  className: string,
};

const ToolbarFixedAdjust = ({ children, className }: Props) => {
  const composedClassName = classnames(
    styles['mdc-toolbar-fixed-adjust'],
    className,
    children ? children.props.className : '',
  );

  return React.cloneElement(children, {
    ...children.props,
    className: composedClassName,
  });
};

export default ToolbarFixedAdjust;
