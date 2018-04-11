// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  style?: { [string]: any },
  className?: string,
  children: React.Node,
};

type State = {
  styles: { [string]: any },
};

export default class ToolbarFixedAdjust extends React.Component<Props, State> {
  state = {
    styles: {},
  };

  setStyle(style: string, value: any) {
    this.setState(state => ({
      styles: { ...state.styles, [style]: value },
    }));
  }

  render() {
    return React.Children.map(this.props.children, child => (
      <child.type
        {...child.props}
        style={{ ...child.style, ...this.state.styles }}
        className={classnames(
          'mdc-toolbar-fixed-adjust',
          this.props.className,
          child.props.className,
        )}
      />
    ));
  }
}
