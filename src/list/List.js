// @flow
import * as React from 'react';
import classnames from 'classnames';

import ListItem from './Item';

type Props = {
  children: React.ChildrenArray<React.Element<typeof ListItem>>,
  dark: boolean,
  dense: boolean,
  twoLines: boolean,
  withAvatar: boolean,
  component: React.ComponentType<any>,
  className: string,
};

const List = ({
  component: Component,
  children,
  dark,
  dense,
  twoLines,
  withAvatar,
  className,
  ...rest
}: Props) => {
  const rootClassName = classnames('mdc-list', className, {
    'mdc-list--theme-dark': dark,
    'mdc-list--dense': dense,
    'mdc-list--two-line': twoLines,
    'mdc-list--avatar-list': withAvatar,
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
