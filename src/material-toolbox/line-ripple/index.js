// @flow
import * as React from 'react';
import cx from 'classnames';

import MDCLineRippleFoundation from '@material/line-ripple/foundation';

import { normalizePropToReactStyle } from '../utils';

type Props = {
  cssOnly: boolean,
};

type State = {
  classNames: { [string]: string },
  style: { [string]: any },
};

export default class LineRipple extends React.PureComponent<Props, State> {
  static defaultProps = {
    cssOnly: false,
  };

  state = {
    classNames: {},
    style: {},
  };

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.createMDCLineRipple_();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.cssOnly !== prevProps.cssOnly) {
      if (this.props.cssOnly) {
        this.removeMDCLineRipple_();
      } else {
        this.createMDCLineRipple_();
      }
    }
  }

  componentWillUnmount() {
    this.removeMDCLineRipple_();
  }

  setRippleCenter(xCoordinate: number) {
    if (this.mdcLineRipple_) {
      this.mdcLineRipple_.setRippleCenter(xCoordinate);
    }
  }

  activate() {
    if (this.mdcLineRipple_) {
      this.mdcLineRipple_.activate();
    }
  }

  deactivate() {
    if (this.mdcLineRipple_) {
      this.mdcLineRipple_.deactivate();
    }
  }

  mdcLineRipple_: ?MDCLineRippleFoundation;
  lineRipple_: ?HTMLDivElement;

  createMDCLineRipple_() {
    this.mdcLineRipple_ = new MDCLineRippleFoundation({
      addClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: true },
        })),
      removeClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: undefined },
        })),
      hasClass: className => this.state.classNames[className],
      setStyle: (propertyName, value) => {
        this.setState(state => ({
          style: {
            ...state.style,
            [normalizePropToReactStyle(propertyName)]: value,
          },
        }));
      },
      registerEventHandler: (evtType, handler) =>
        this.lineRipple_ && this.lineRipple_.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) =>
        this.lineRipple_ &&
        this.lineRipple_.removeEventListener(evtType, handler),
    });
    this.mdcLineRipple_.init();
  }

  removeMDCLineRipple_() {
    if (this.mdcLineRipple_) {
      this.mdcLineRipple_.destroy();
      delete this.mdcLineRipple_;
    }
  }

  render() {
    return (
      <div
        ref={element => {
          this.lineRipple_ = element;
        }}
        className={cx('mdc-line-ripple', this.state.classNames)}
        style={this.state.style}
      />
    );
  }
}
