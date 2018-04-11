// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  name: string,
  scrollable: boolean,
};

const DialogDescription = ({
  children,
  name,
  className,
  scrollable,
}: Props) => (
  <section
    id={`${name}-description`}
    className={classnames(className, 'mdc-dialog__body', {
      'mdc-dialog__body--scrollable': scrollable,
    })}>
    {children}
  </section>
);

export default DialogDescription;
