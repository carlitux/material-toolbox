// @flow
import * as React from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';

import * as util from '@material/ripple/util';
import MDCRippleFoundation from '@material/ripple/foundation';

type Arguments = {
  unbounded: boolean,
  disabled: boolean,
};

type State = {
  classes: { [string]: boolean },
};

const Ripple = (
  Component: React.ComponentType<any>,
  { unbounded, disabled }: Arguments = { unbounded: false, disabled: false },
) =>
  class extends React.Component<{ [any]: any, className: string }, State> {
    static MATCHES: string = util.getMatchesProperty(HTMLElement.prototype);
    displayName = `${Component.displayName || ''}Rippled`;
    state = { classes: {} };

    componentDidMount() {
      this.foundation.init();
    }

    componentWillUnmount() {
      this.foundation.destroy();
    }

    activate() {
      this.foundation.activate();
    }

    deactivate() {
      this.foundation.deactivate();
    }

    foundation = new MDCRippleFoundation({
      browserSupportsCssVars: () => util.supportsCssVariables(window),
      isUnbounded: () => unbounded,
      isSurfaceActive: () => this.element[this.constructor.MATCHES](':active'),
      isSurfaceDisabled: () => disabled,
      addClass: className =>
        this.element &&
        this.setState({
          classes: { ...this.state.classes, [className]: true },
        }),
      removeClass: className =>
        this.element &&
        this.setState({
          classes: { ...this.state.classes, [className]: false },
        }),
      registerInteractionHandler: (evtType, handler) =>
        this.element.addEventListener(evtType, handler, util.applyPassive()),
      deregisterInteractionHandler: (evtType, handler) =>
        this.element.removeEventListener(evtType, handler, util.applyPassive()),
      registerResizeHandler: handler =>
        window.addEventListener('resize', handler),
      deregisterResizeHandler: handler =>
        window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) =>
        this.element && this.element.style.setProperty(varName, value),
      computeBoundingRect: () => this.element.getBoundingClientRect(),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset,
      }),
    });
    element: HTMLElement;

    render() {
      const className = classnames(this.state.classes, this.props.className);

      return (
        <Component
          {...this.props}
          className={className}
          rippleRef={element => {
            this.element = ReactDom.findDOMNode(element); // eslint-disable-line
          }}
        />
      );
    }
  };

export default Ripple;
