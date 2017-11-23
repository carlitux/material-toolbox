// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  name: string,
};

const DialogTitle = ({ children, name, className }: Props) => (
  <h2
    id={`${name}-label`}
    className={classnames(className, 'mdc-dialog__header__title')}>
    {children}
  </h2>
);

export default DialogTitle;
