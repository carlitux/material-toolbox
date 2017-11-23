// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  name: string,
};

const DialogHeader = ({ children, name, className }: Props) => (
  <header className={classnames(className, 'mdc-dialog__header')}>
    {React.Children.map(
      children,
      child =>
        child.type ? <child.type {...child.props} name={name} /> : child,
    )}
  </header>
);

export default DialogHeader;
