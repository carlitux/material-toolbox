// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const CardPrimary = ({ className, children, ...rest }: Props) => (
  <section {...rest} className={classnames(className, 'mdc-card__primary')}>
    {children}
  </section>
);

export default CardPrimary;
