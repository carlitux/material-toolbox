// @flow
import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

type Props = {
  children: React.Node,
  align: null | 'start' | 'end',
  shrink: boolean,
};

const BASE = 'mdc-toolbar__section';

const ToolbarSection = ({ children, align, shrink, ...rest }: Props) => {
  const className = classnames(styles[BASE], {
    [styles[`${BASE}--align-${align || ''}`]]: align,
    [styles['mdc-toolbar__section--shrink-to-fit']]: shrink,
  });

  return (
    <section {...rest} className={className}>
      {children}
    </section>
  );
};

ToolbarSection.defaultProps = {
  align: null,
  shrink: false,
};

export default ToolbarSection;
