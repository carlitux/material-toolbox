// @flow
import * as React from 'react';

import ToolbarSection from './Section';
import styles from './styles.scss';

type Props = {
  children: React.ChildrenArray<React.Element<typeof ToolbarSection>>,
};

const ToolbarRow = ({ children, ...rest }: Props) =>
  <div {...rest} className={styles['mdc-toolbar__row']}>
    {children}
  </div>;

export default ToolbarRow;
