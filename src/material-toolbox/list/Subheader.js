// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  component: React.ComponentType<any>,
  className: string,
};

const ListSubheader = ({ component: Component, className, ...rest }: Props) => (
  <Component
    {...rest}
    className={classnames('mdc-list-group__subheader', className)}
  />
);

ListSubheader.defaultProps = {
  component: 'h3', // eslint-disable-line
};

export default ListSubheader;
