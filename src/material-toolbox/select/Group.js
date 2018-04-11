// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  className: string,
  children: React.Node,
  multiple: boolean,
  cssOnly: boolean,
};

const SelectOptGroup = ({
  children,
  multiple,
  cssOnly,
  className,
  ...rest
}: Props) => (
  <optgroup {...rest} className={classnames(className, 'mdc-list-group')}>
    {React.Children.map(children, child => (
      <child.type {...child.props} multiple={multiple} cssOnly={cssOnly} />
    ))}
  </optgroup>
);

export default SelectOptGroup;
