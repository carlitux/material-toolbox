// @flow
// eslint-disable-next-line
import * as React from 'react';

/* eslint-disable */
import Theme from 'material-toolbox/theme';
/* eslint-enable */

type Props = { to: string, children: React.Node };

const ThemedLink = ({ to, children, ...rest }: Props) => (
  <Theme textStyle="primary">
    <a {...rest} href={to}>
      {children}
    </a>
  </Theme>
);

export default ThemedLink;
