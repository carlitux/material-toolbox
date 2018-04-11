// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: string,
  className: string,
  value: string,
  disabled: boolean,
  cssOnly: boolean,
  multiple: boolean,
  divider: boolean,
};

export default class SelectOption extends React.Component<Props> {
  getOffsetTop() {
    return this.li && this.li.offsetTop;
  }

  li: ?HTMLLIElement;

  render() {
    const {
      cssOnly,
      value,
      disabled,
      children,
      className,
      multiple,
      divider,
      ...rest
    } = this.props;

    if (cssOnly || multiple) {
      return (
        <option
          {...rest}
          value={value}
          disabled={disabled || divider}
          role={divider && 'presentation'}
          className={classnames(className, {
            'mdc-list-item': multiple && !divider,
            'mdc-list-divider': divider,
          })}>
          {children}
        </option>
      );
    }

    return (
      <li
        {...rest}
        id={value}
        aria-disabled={disabled ? 'true' : undefined}
        tabIndex={disabled ? '-1' : '0'}
        ref={element => {
          this.li = element;
        }}
        className={classnames(className, 'mdc-list-item')}>
        {children}
      </li>
    );
  }
}
