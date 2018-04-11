// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  id: string,
  label: string,
  disabled: boolean,
  className: string,
};

const Switch = ({ disabled, id, label, className, ...rest }: Props) => (
  <React.Fragment>
    <div
      className={classnames('mdc-switch', className, {
        'mdc-switch--disabled': disabled,
      })}>
      <input
        {...rest}
        id={id}
        disabled={disabled}
        type="checkbox"
        className="mdc-switch__native-control"
      />
      <div className="mdc-switch__background">
        <div className="mdc-switch__knob" />
      </div>
    </div>
    <label htmlFor={id} className="mdc-switch-label">
      {label}
    </label>
  </React.Fragment>
);

export default Switch;
