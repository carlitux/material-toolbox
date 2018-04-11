// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children?: React.Node,
  end?: boolean,
  className?: string,
  component: React.ComponentType<any> | string,
};

const ListDetail = ({
  component: Component,
  children,
  className,
  end,
  ...rest
}: Props) => {
  const cn = classnames(
    className,
    `mdc-list-item__${end ? 'meta' : 'graphic'}`,
  );

  return (
    <Component {...rest} className={cn}>
      {children}
    </Component>
  );
};

ListDetail.defaultProps = {
  children: undefined,
  className: undefined,
  end: false,
};

export default ListDetail;
