// @flow
import * as React from 'react';
import styles from '@material/toolbar/mdc-toolbar.scss';

import ToolbarSection from './Section';

type Props = {
  children: React.ChildrenArray<React.Element<typeof ToolbarSection>>,
};

const ToolbarRow = ({ children, ...rest }: Props) => (
  <div {...rest} className={styles['mdc-toolbar__row']}>
    {children}
  </div>
);

export default ToolbarRow;
