// @flow
import * as React from 'react';
import classnames from 'classnames';

const PermanentDrawer = ({ ...rest }) => {
  const className = classnames('mdc-permanent-drawer', 'mdc-typography');
  return <nav {...rest} className={className} />;
};

export default PermanentDrawer;
