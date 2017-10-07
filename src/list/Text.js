// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  type: 'primary' | 'secondary',
  label: string,
  className: string,
};

const ListText = ({ label, children, className, type, ...rest }: Props) => {
  const classname = classnames(className, {
    'mdc-list-item__text': type === 'primary',
    'mdc-list-item__text__secondary': type === 'secondary',
  });

  return (
    <span {...rest} className={classname}>
      {label}
      {children}
    </span>
  );
};

ListText.defaultProps = {
  type: 'primary',
};

export default ListText;
