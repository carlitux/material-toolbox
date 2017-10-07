// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  dark: boolean,
  dense: boolean,
  twoLines: boolean,
  component: React.ComponentType<any>,
};

const List = ({
  children,
  dark,
  dense,
  twoLines,
  component,
  ...rest
}: Props) => {
  const rootClassName = classnames('mdc-list', {
    'mdc-list--theme-dark': dark,
    'mdc-list--dense': dense,
    'mdc-list--two-line': twoLines,
  });

  return React.createElement(
    component,
    { ...rest, className: rootClassName },
    children,
  );
};

List.defaultProps = {
  component: 'ul',
};

export default List;
