// @flow
import * as React from 'react';
import * as util from '@material/ripple/util';
import ReactDOM from 'react-dom';
import MDCRippleFoundation from '@material/ripple/foundation';
import cx from 'classnames';

type Props = {
  children: React.Node,
  primary: boolean,
  accent: boolean,
  cssOnly: boolean,
  unbounded: boolean,
  disabled: boolean,
  className?: string,
};

type State = {
  classNames: { [string]: string },
  style: { [string]: any },
};

export default class Ripple extends React.Component<Props, State> {
  static defaultProps = {
    primary: false,
    accent: false,
    unbounded: false,
    disabled: false,
    cssOnly: false,
  };

  state = {
    classNames: {},
    style: {},
  };

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.createMDCRipple_(this.props);
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.cssOnly !== prevProps.cssOnly) {
      if (this.props.cssOnly) {
        this.removeMDCRipple_();
      } else {
        this.createMDCRipple_(this.props);
      }
    }

    const didChange = ['primary', 'accent', 'unbounded'].some(
      key => this.props[key] !== prevProps[key],
    );

    if (didChange && this.mdcRipple_) {
      this.mdcRipple_.init();
    }
  }

  componentWillUnmount() {
    this.removed_ = true;
    this.removeMDCRipple_();
  }

  mdcRipple_: ?MDCRippleFoundation;
  rippled_: ?HTMLElement | ?Element | ?Text;
  removed_: ?boolean;

  createMDCRipple_({ unbounded, disabled }: Props) {
    this.rippled_ = ReactDOM.findDOMNode(this);  // eslint-disable-line
    const MATCHES = util.getMatchesProperty(HTMLElement.prototype);
    this.mdcRipple_ = new MDCRippleFoundation({
      browserSupportsCssVars: () => util.supportsCssVariables(window),
      isUnbounded: () => unbounded,
      // $FlowFixMe
      isSurfaceActive: () => this.rippled_ && this.rippled_[MATCHES](':active'),
      isSurfaceDisabled: () => disabled,
      addClass: className => {
        if (!this.removed_) {
          this.setState(state => ({
            classNames: { ...state.classNames, [className]: true },
          }));
        }
      },
      removeClass: className => {
        if (!this.removed_) {
          this.setState(state => ({
            classNames: { ...state.classNames, [className]: undefined },
          }));
        }
      },
      containsEventTarget: target =>
        this.rippled_ && this.rippled_.contains(target),
      registerInteractionHandler: (evtType, handler) =>
        this.rippled_ &&
        this.rippled_.addEventListener(evtType, handler, util.applyPassive()),
      deregisterInteractionHandler: (evtType, handler) =>
        this.rippled_ &&
        this.rippled_.removeEventListener(
          evtType,
          handler,
          util.applyPassive(),
        ),
      registerDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement &&
        document.documentElement.addEventListener(
          evtType,
          handler,
          util.applyPassive(),
        ),
      deregisterDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement &&
        document.documentElement.removeEventListener(
          evtType,
          handler,
          util.applyPassive(),
        ),
      registerResizeHandler: handler =>
        window.addEventListener('resize', handler),
      deregisterResizeHandler: handler =>
        window.removeEventListener('resize', handler),
      updateCssVariable: (cssVar, value) => {
        if (!this.removed_) {
          this.setState(state => ({
            style: { ...state.style, [cssVar]: value },
          }));
        }
      },
      computeBoundingRect: () =>
        // $FlowFixMe
        this.rippled_ && this.rippled_.getBoundingClientRect(),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset,
      }),
    });

    this.mdcRipple_.init();
  }

  removeMDCRipple_() {
    if (this.mdcRipple_) {
      this.mdcRipple_.destroy();
      delete this.mdcRipple_;
    }
  }

  render() {
    const { children, className, primary, accent, unbounded } = this.props;
    return React.Children.map(children, child => {
      const classes = cx(
        className,
        child.props.className,
        'mdc-ripple-surface',
        this.state.classNames,
        {
          'mdc-ripple-surface--primary': primary,
          'mdc-ripple-surface--accent': accent,
        },
      );
      const style = { ...child.style, ...this.state.style };
      return (
        <child.type
          {...child.props}
          className={classes}
          style={style}
          data-mdc-ripple-is-unbounded={unbounded || undefined}
          ref={node => {
            const { ref } = child;
            if (typeof ref === 'function') {
              ref(node);
            }
          }}
        />
      );
    });
  }
}

export function createAdapter(
  component: React.Component<any, any>,
  element: ?HTMLElement | ?Element | ?Text,
  {
    unbounded = false,
    disabled = false,
    primary = false,
    accent = false,
  }: {
    unbounded?: boolean,
    disabled?: boolean,
    primary?: boolean,
    accent?: boolean,
  },
): { [any]: any } {
  if (!element) {
    return {};
  }

  const MATCHES = util.getMatchesProperty(HTMLElement.prototype);
  let removed = false;

  // $FlowFixMe
  component.setState(state => ({
    rippleStyle: {
      ...state.rippleStyle,
    },
    rippleClassName: {
      ...state.rippleClassName,
      'mdc-ripple-surface--primary': primary,
      'mdc-ripple-surface--accent': accent,
    },
  }));

  return {
    componentRemoved: () => {
      removed = true;
    },
    browserSupportsCssVars: () => util.supportsCssVariables(window),
    isUnbounded: () => unbounded,
    // $FlowFixMe
    isSurfaceActive: () => element[MATCHES](':active'),
    isSurfaceDisabled: () => disabled,
    addClass: className => {
      if (!removed) {
        // $FlowFixMe
        component.setState(state => ({
          // $FlowFixMe
          rippleClassName: { ...state.rippleClassName, [className]: true },
        }));
      }
    },
    removeClass: className => {
      // This used to allow mdc-ripple do clean component destroy
      // return to false to do not enter into isMount antipattern
      // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
      if (!removed) {
        // $FlowFixMe
        component.setState(state => ({
          // $FlowFixMe
          rippleClassName: { ...state.rippleClassName, [className]: false },
        }));
      }
    },
    containsEventTarget: target => element && element.contains(target),
    registerInteractionHandler: (evtType, handler) =>
      element &&
      element.addEventListener(evtType, handler, util.applyPassive()),
    deregisterInteractionHandler: (evtType, handler) =>
      element &&
      element.removeEventListener(evtType, handler, util.applyPassive()),
    registerResizeHandler: handler => {
      window.addEventListener('resize', handler);
    },
    deregisterResizeHandler: handler => {
      window.removeEventListener('resize', handler);
    },
    updateCssVariable: (cssVar, value) => {
      if (!removed) {
        // $FlowFixMe
        component.setState(state => ({
          // $FlowFixMe
          rippleStyle: { ...state.rippleStyle, [cssVar]: value },
        }));
      }
    },
    // $FlowFixMe
    computeBoundingRect: () => element.getBoundingClientRect(),
    getWindowPageOffset: () => ({
      x: window.pageXOffset,
      y: window.pageYOffset,
    }),
    registerDocumentInteractionHandler: (evtType, handler) =>
      document.documentElement &&
      document.documentElement.addEventListener(
        evtType,
        handler,
        util.applyPassive(),
      ),
    deregisterDocumentInteractionHandler: (evtType, handler) =>
      document.documentElement &&
      document.documentElement.removeEventListener(
        evtType,
        handler,
        util.applyPassive(),
      ),
  };
}
