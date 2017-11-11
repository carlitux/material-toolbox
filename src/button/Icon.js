// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  className: string,
  children: React.Node,
};

const ButtonIcon = ({ className, children, ...rest }: Props) => (
  <i {...rest} className={classnames('mdc-button__icon', className)}>
    {children}
  </i>
);

export default ButtonIcon;
