// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const CardSupportingText = ({ className, children, ...rest }: Props) => (
  <section
    {...rest}
    className={classnames(className, 'mdc-card__supporting-text')}>
    {children}
  </section>
);

export default CardSupportingText;
