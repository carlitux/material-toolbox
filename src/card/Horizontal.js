// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const CardHorizontalBlock = ({ className, children, ...rest }: Props) => (
  <div
    {...rest}
    className={classnames(className, 'mdc-card__horizontal-block')}>
    {children}
  </div>
);

export default CardHorizontalBlock;
