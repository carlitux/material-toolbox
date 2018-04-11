// @flow
import * as React from 'react';
import classnames from 'classnames';

import List from './List';
import ListItem from './Item';
import ListSubheader from './Subheader';

type Props = {
  className: string,
  children: React.ChildrenArray<
    React.Element<typeof List | typeof ListItem | typeof ListSubheader>,
  >,
};

const ListGroup = ({ className, children }: Props) => {
  const cn = classnames(className, 'mdc-list-group');
  return <div className={cn}>{children}</div>;
};

export default ListGroup;
