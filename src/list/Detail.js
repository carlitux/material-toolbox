// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
  component: React.ComponentType<any>,
  end: boolean,
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
    `mdc-list-item__${end ? 'end' : 'start'}-detail`,
  );

  return (
    <Component {...rest} className={cn}>
      {children}
    </Component>
  );
};

export default ListDetail;
