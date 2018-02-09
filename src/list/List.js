// @flow
import * as React from 'react';
import classnames from 'classnames';

import ListItem from './Item';

type Props = {
  children: React.ChildrenArray<React.Element<typeof ListItem>>,
  dense: boolean,
  twoLines: boolean,
  withAvatar: boolean,
  nonInteractive: boolean,
  component: React.ComponentType<any>,
  className: string,
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
  component: 'ul', // eslint-disable-line
};

export default List;
