// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  className: string,
};

const TextFieldIcon = ({ className, ...rest }: Props) => (
  <i {...rest} className={classnames('mdc-text-field__icon', className)} />
);

export default TextFieldIcon;
