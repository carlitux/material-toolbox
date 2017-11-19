// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  component: React.ComponentType<any> | string,
  children: React.Node,
  className: string,
  dark: boolean,
};

const Card = ({
  component: Component,
  className,
  children,
  dark,
  ...rest
}: Props) => (
  <Component
    {...rest}
    className={classnames(className, 'mdc-card', {
      'mdc-card--theme-dark': dark,
    })}>
    {children}
  </Component>
);

Card.defaultProps = {
  component: 'div',  // eslint-disable-line
};

export default Card;
