// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const Typography = ({ children, className }: Props) => {
  const composedClassName = classnames('mdc-typography', className);

  return React.Children.map(children, child => {
    const newClassName = classnames(composedClassName, child.props.className);
    return <child.type {...child.props} className={newClassName} />;
  });
};

export default Typography;
