// @flow
import * as React from 'react';
import classnames from 'classnames';

import MDCLinearProgressFoundation from '@material/linear-progress/foundation';

type Props = {
  progress?: number,
  buffer?: number,
  indeterminate?: boolean,
  reversed?: boolean,
};

type State = {
  classes: { [string]: boolean },
};

export default class LinearProgress extends React.Component<Props, State> {
  state = {
    classes: {
      'mdc-linear-progress': true,
    },
  };

  componentDidMount() {
    this.mdcLinearProgress.init();

    if (this.props.progress !== undefined) {
      this.mdcLinearProgress.setProgress(this.props.progress);
    }

    if (this.props.buffer !== undefined) {
      this.mdcLinearProgress.setBuffer(this.props.buffer);
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.progress !== undefined) {
      this.mdcLinearProgress.setProgress(this.props.progress);
    }

    if (this.props.buffer !== undefined) {
      this.mdcLinearProgress.setBuffer(this.props.buffer);
    }
  }

  componentWillUnmount() {
    this.mdcLinearProgress.destroy();
  }

  primaryBar: ?HTMLDivElement;
  buffer: ?HTMLDivElement;
  mdcLinearProgress: MDCLinearProgressFoundation;

  mdcLinearProgress = new MDCLinearProgressFoundation({
    addClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: true },
      })),
    removeClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: false },
      })),
    hasClass: className => this.state.classes[className],
    getPrimaryBar: () => this.primaryBar,
    getBuffer: () => this.buffer,
    // NOTE.- Maybe move to react declarative style
    setStyle: (el, styleProperty, value) => {
      el.style[styleProperty] = value; // eslint-disable-line
    },
  });

  render() {
    const rootClassName = classnames(this.state.classes, {
      'mdc-linear-progress--indeterminate': this.props.indeterminate,
      'mdc-linear-progress--reversed': this.props.reversed,
    });

    return (
      <div
        role="progressbar"
        className={rootClassName}
        data-buffer={this.props.buffer && this.props.buffer > 0}>
        <div className="mdc-linear-progress__buffering-dots" />
        <div
          ref={element => {
            this.buffer = element;
          }}
          className="mdc-linear-progress__buffer"
        />
        <div
          ref={element => {
            this.primaryBar = element;
          }}
          className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
      </div>
    );
  }
}
