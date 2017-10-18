// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  component: React.ComponentType<any>,
  devider: boolean,
  inset: boolean,
  className: string,
  rippleRef: React.Ref<any>,
};

const ListItem = ({
  children,
  component: Component,
  devider,
  inset,
  className,
  rippleRef,
  ...rest
}: Props) => {
  const cn = classnames(className, {
    'mdc-list-item': !devider,
    'mdc-list-divider': devider,
    'mdc-list-divider--inset': devider && inset,
  });

  if (devider) {
    return <Component {...rest} className={cn} role="separator" />;
  }

  return (
    <Component ref={rippleRef} {...rest} className={cn}>
      {children}
    </Component>
  );
};

ListItem.defaultProps = {
  component: 'li', // eslint-disable-line
};

export default ListItem;
