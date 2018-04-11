// @flow
import * as React from 'react';

import Theme from './material-toolbox/theme';

type Props = {
  to: string,
  children: React.Node,
  component: React.ComponentType<any> | string,
};

const ThemedLink = ({ to, children, component: Component, ...rest }: Props) => {
  const props = {
    href: Component === 'a' ? to : undefined,
    to: Component !== 'a' ? to : undefined,
  };
  return (
    <Theme textStyle="primary">
      <Component {...rest} {...props}>
        {children}
      </Component>
    </Theme>
  );
};

ThemedLink.defaultProps = {
  component: 'a',
};

export default ThemedLink;
