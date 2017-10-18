// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  className: string,
};

const Typography = ({ children, className }: Props) => {
  const composedClassName = classnames('mdc-typography', className);

  if (children == null || Array.isArray(children)) {
    return React.Children.map(children, child => {
      const newClassName = classnames(composedClassName, child.props.className);
      return <child.type {...child.props} className={newClassName} />;
    });
  }

  // $FlowFixMe
  const newClassName = classnames(composedClassName, children.props.className);
  // $FlowFixMe
  return <children.type {...children.props} className={newClassName} />;
};

export default Typography;
