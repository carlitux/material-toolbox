// @flow
import * as React from 'react';
import cx from 'classnames';

import MDCNotchedOutlineFoundation from '@material/notched-outline/foundation';

type Props = {
  cssOnly: boolean,
  className?: string,
};

type State = {
  classNames: { [string]: string },
  d?: number,
};

export default class NotchedOutline extends React.Component<Props, State> {
  static defaultProps = {
    cssOnly: false,
  };

  state = {
    classNames: {},
    d: undefined,
  };

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.createMDCNotchedOutline_();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.cssOnly !== prevProps.cssOnly) {
      if (this.props.cssOnly) {
        this.removeMDCNotchedOutline_();
      } else {
        this.createMDCNotchedOutline_();
      }
    }
  }

  componentWillUnmount() {
    this.removeMDCNotchedOutline_();
  }

  mdcNotchedOutline_: ?MDCNotchedOutlineFoundation;
  root_: ?HTMLDivElement;
  idle_: ?HTMLDivElement;
  path_: ?Element;

  notch(notchWidth: number, isRtl: boolean) {
    if (this.mdcNotchedOutline_) {
      this.mdcNotchedOutline_.notch(notchWidth, isRtl);
    }
  }

  closeNotch() {
    if (this.mdcNotchedOutline_) {
      this.mdcNotchedOutline_.closeNotch();
    }
  }

  createMDCNotchedOutline_() {
    this.mdcNotchedOutline_ = new MDCNotchedOutlineFoundation({
      addClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: true },
        })),
      removeClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: undefined },
        })),
      getWidth: () => this.root_ && this.root_.offsetWidth,
      getHeight: () => this.root_ && this.root_.offsetHeight,
      setOutlinePathAttr: value => this.setState({ d: value }),
      getIdleOutlineStyleValue: propertyName =>
        window.getComputedStyle(this.idle_).getPropertyValue(propertyName),
    });

    this.mdcNotchedOutline_.init();
  }

  removeMDCNotchedOutline_() {
    if (this.mdcNotchedOutline_) {
      this.mdcNotchedOutline_.destroy();
      delete this.mdcNotchedOutline_;
    }
  }

  render() {
    const { cssOnly, className, ...rest } = this.props;

    return (
      <>
        <div
          {...rest}
          ref={element => {
            this.root_ = element;
          }}
          className={cx(
            'mdc-notched-outline',
            this.state.classNames,
            className,
          )}>
          <svg>
            <path
              ref={element => {
                this.path_ = element;
              }}
              d={this.state.d}
              className="mdc-notched-outline__path"
            />
          </svg>
        </div>
        <div
          ref={element => {
            this.idle_ = element;
          }}
          className="mdc-notched-outline__idle"
        />
      </>
    );
  }
}
