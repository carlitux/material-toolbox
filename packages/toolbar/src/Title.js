// @flow
import * as React from 'react';

import styles from './styles.scss';

type Props = {
  label: string,
  component: React.Element<any>,
};

const ToolbarTitle = ({ label, component, ...rest }: Props) =>
  React.createElement(
    component,
    {
      ...rest,
      className: styles['mdc-toolbar__title'],
    },
    label,
  );

ToolbarTitle.defaultProps = {
  component: 'span',
};

export default ToolbarTitle;
