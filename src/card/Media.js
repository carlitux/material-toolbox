// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const CardMedia = ({ className, children, ...rest }: Props) => (
  <section {...rest} className={classnames(className, 'mdc-card__media')}>
    {children}
  </section>
);

export default CardMedia;
