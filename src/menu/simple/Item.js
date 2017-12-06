// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  devider: boolean,
};

const SimpleMenuItem = ({ devider, children, className, ...rest }: Props) => (
  <li
    {...rest}
    role={devider ? 'separator' : 'menuitem'}
    className={classnames(className, {
      'mdc-list-item': !devider,
      'mdc-list-divider': devider,
    })}>
    {children}
  </li>
);

export default SimpleMenuItem;
