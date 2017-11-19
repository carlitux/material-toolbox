// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  vertical: boolean,
  className: string,
};

const CardActions = ({ className, children, vertical, ...rest }: Props) => (
  <section
    {...rest}
    className={classnames('mdc-card__actions', className, {
      'mdc-card__actions--vertical': vertical,
    })}>
    {React.Children.map(children, child => (
      <child.type
        {...child.props}
        className={classnames('mdc-card__action', child.className)}
      />
    ))}
  </section>
);

export default CardActions;
