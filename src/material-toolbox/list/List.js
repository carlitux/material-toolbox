// @flow
import * as React from 'react';
import classnames from 'classnames';

// TODO: Update props here
type Props = {
  children: React.Node,
  component: React.ComponentType<any> | string,
  dense?: boolean,
  twoLines?: boolean,
  withAvatar?: boolean,
  nonInteractive?: boolean,
  className?: string,
};

const List = ({
  component: Component,
  children,
  dense,
  twoLines,
  withAvatar,
  className,
  nonInteractive,
  ...rest
}: Props) => {
  const rootClassName = classnames('mdc-list', className, {
    'mdc-list--dense': dense,
    'mdc-list--two-line': twoLines,
    'mdc-list--avatar-list': withAvatar,
    'mdc-list--non-interactive': nonInteractive,
  });

  return (
    <Component {...rest} className={rootClassName}>
      {children}
    </Component>
  );
};

List.defaultProps = {
  component: 'ul',
  dense: false,
  twoLines: false,
  withAvatar: false,
  nonInteractive: false,
  className: undefined,
};

export default List;
