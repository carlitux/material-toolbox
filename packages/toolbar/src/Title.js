// @flow
import * as React from 'react';

import styles from './styles.scss';

type Props = {
  label: string,
};

const ToolbarTitle = ({ label, ...rest }: Props) =>
  <span {...rest} className={styles['mdc-toolbar__title']}>
    {label}
  </span>;

export default ToolbarTitle;
