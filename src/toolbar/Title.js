// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  label: string,
  component: React.ComponentType<any> | string,
  className: string,
  style: { [string]: any },
};

type State = {
  styles: { [string]: any },
};

export default class ToolbarTitle extends React.Component<Props, State> {
  static defaultProps = {
    component: 'span', // eslint-disable-line
  };

  state = {
    styles: {},
  };

  setStyle(style: string, value: any) {
    this.setState(state => ({
      styles: { ...state.styles, [style]: value },
    }));
  }

  render() {
    const { label, component: Component, className, ...rest } = this.props;

    return (
      <Component
        {...rest}
        style={{ ...this.props.style, ...this.state.styles }}
        className={classnames(className, 'mdc-toolbar__title')}>
        {label}
      </Component>
    );
  }
}
