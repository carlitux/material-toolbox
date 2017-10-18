// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  secondary: boolean,
  className: string,
  component: React.ComponentType<any>,
};

const ListText = ({
  children,
  className,
  secondary,
  component: Component,
  ...rest
}: Props) => {
  const classname = classnames(className, {
    'mdc-list-item__text': !secondary,
    'mdc-list-item__text__secondary': secondary,
  });

  return (
    <Component {...rest} className={classname}>
      {children}
    </Component>
  );
};

ListText.defaultProps = {
  component: 'span', // eslint-disable-line
};

export default ListText;
