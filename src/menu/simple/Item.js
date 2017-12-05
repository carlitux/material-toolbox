// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const SimpleMenuItem = ({ children, className, ...rest }: Props) => (
  <li
    {...rest}
    role="menuitem"
    className={classnames(className, 'mdc-list-item')}>
    {children}
  </li>
);

export default SimpleMenuItem;
