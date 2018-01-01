// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  divider: boolean,
};

const SimpleMenuItem = ({ divider, children, className, ...rest }: Props) => (
  <li
    {...rest}
    role={divider ? 'separator' : 'menuitem'}
    className={classnames(className, {
      'mdc-list-item': !divider,
      'mdc-list-divider': divider,
    })}>
    {children}
  </li>
);

export default SimpleMenuItem;
