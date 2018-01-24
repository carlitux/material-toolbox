// @flow
import * as React from 'react';
import classnames from 'classnames';

import MDCSliderFoundation from '@material/slider/foundation';

type Props = {
  value: number,
  min: number,
  max: number,
  step: number,
  discrete: boolean,
  disabled: boolean,
  showMarkers: boolean,
  label: string,
  className: string,
  onInput: (value: number) => void,
  onChange: (value: number) => void,
};

type State = {
  classes: { [string]: boolean },
  attrs: { [string]: any },
  thumbContainerStyles: { [string]: any },
  trackStyles: { [string]: any },
  lastTrackStyles: { [string]: any },
  markers: number,
  marker: string,
};

export default class Slider extends React.PureComponent<Props, State> {
  static defaultProps = {
    value: 0,
    min: 0,
    max: 100,
  };

  constructor(props: Props) {
    super();

    this.state = {
      marker: '',
      markers: 0,
      classes: {
        'mdc-slider': true,
        'mdc-slider--discrete': props.discrete,
        'mdc-slider--display-markers': props.showMarkers,
      },
      thumbContainerStyles: {},
      lastTrackStyles: {},
      trackStyles: {},
      attrs: {
        role: 'slider',
        'aria-valuemin': props.min,
        'aria-valuemax': props.max,
        'aria-valuenow': props.value,
      },
    };
  }

  componentDidMount() {
    this.mdcSlider.init();
    this.mdcSlider.setStep(this.props.step);
    this.mdcSlider.setMin(this.props.min);
    this.mdcSlider.setMax(this.props.max);
    this.mdcSlider.setValue(this.props.value);
  }

  componentWillReceiveProps(props: Props) {
    if (this.props.min !== props.min) {
      this.mdcSlider.setMin(props.min);
    }

    if (this.props.max !== props.max) {
      this.mdcSlider.setMax(props.max);
    }

    if (this.props.step !== props.step) {
      this.mdcSlider.setStep(props.step);
    }

    if (this.props.value !== props.value) {
      this.mdcSlider.setValue(props.value);
    }

    if (this.props.disabled !== props.disabled) {
      this.mdcSlider.setDisabled(props.disabled);
    }
  }

  componentWillUnmount() {
    this.mdcSlider.destroy();
  }

  root: ?HTMLDivElement;
  thumbContainer: ?HTMLDivElement;

  mdcSlider = new MDCSliderFoundation({
    addClass: className =>
      this.setState(state => ({
        classes: {
          ...state.classes,
          [className]: true,
        },
      })),
    removeClass: className =>
      this.setState(state => ({
        classes: {
          ...state.classes,
          [className]: false,
        },
      })),
    hasClass: className => this.state.classes[className],
    getAttribute: name => this.state.attrs[name],
    setAttribute: (name, value) =>
      this.setState(state => ({
        attrs: {
          ...state.attrs,
          [name]: value,
        },
      })),
    removeAttribute: name =>
      this.setState(state => ({
        attrs: {
          ...state.attrs,
          [name]: undefined,
        },
      })),
    computeBoundingRect: () => this.root && this.root.getBoundingClientRect(),
    getTabIndex: () => this.root && this.root.tabIndex,
    registerInteractionHandler: (type, handler) => {
      this.root && this.root.addEventListener(type, handler);
    },
    deregisterInteractionHandler: (type, handler) => {
      this.root && this.root.removeEventListener(type, handler);
    },
    registerThumbContainerInteractionHandler: (type, handler) => {
      this.thumbContainer &&
        this.thumbContainer.addEventListener(type, handler);
    },
    deregisterThumbContainerInteractionHandler: (type, handler) => {
      this.thumbContainer &&
        this.thumbContainer.removeEventListener(type, handler);
    },
    registerBodyInteractionHandler: (type, handler) => {
      document.body && document.body.addEventListener(type, handler);
    },
    deregisterBodyInteractionHandler: (type, handler) => {
      document.body && document.body.removeEventListener(type, handler);
    },
    registerResizeHandler: handler => {
      window.addEventListener('resize', handler);
    },
    deregisterResizeHandler: handler => {
      window.removeEventListener('resize', handler);
    },
    notifyInput: () => {
      this.props.onInput && this.props.onInput(this.mdcSlider.getValue());
    },
    notifyChange: () => {
      this.props.onChange && this.props.onChange(this.mdcSlider.getValue());
    },
    setThumbContainerStyleProperty: (name, value) =>
      this.setState(state => ({
        thumbContainerStyles: {
          ...state.thumbContainerStyles,
          [name]: value,
        },
      })),
    setTrackStyleProperty: (name, value) =>
      this.setState(state => ({
        trackStyles: {
          ...state.trackStyles,
          [name]: value,
        },
      })),
    setMarkerValue: value => {
      this.setState({ marker: value });
    },
    appendTrackMarkers: numMarkers => {
      this.setState({ markers: numMarkers });
    },
    removeTrackMarkers: () => {
      this.setState({ markers: 0 });
    },
    setLastTrackMarkersStyleProperty: (propertyName, value) => {
      this.setState(state => ({
        lastTrackStyles: {
          ...state.lastTrackStyles,
          [propertyName]: value,
        },
      }));
    },
    isRTL: () => this.root && getComputedStyle(this.root).direction === 'rtl',
  });

  render() {
    const { label, discrete, showMarkers, className } = this.props;
    const rootClassNames = classnames(className, this.state.classes);

    return (
      <div
        {...this.state.attrs}
        ref={element => {
          this.root = element;
        }}
        className={rootClassNames}
        aria-label={label}>
        <div className="mdc-slider__track-container">
          <div style={this.state.trackStyles} className="mdc-slider__track" />
          {showMarkers && (
            <div className="mdc-slider__track-marker-container">
              {Array.from(Array(this.state.markers).keys()).map(item => (
                <div
                  key={item}
                  style={
                    item === this.state.markers - 1
                      ? this.state.lastTrackStyles
                      : undefined
                  }
                  className="mdc-slider__track-marker"
                />
              ))}
            </div>
          )}
        </div>
        <div
          ref={element => {
            this.thumbContainer = element;
          }}
          style={this.state.thumbContainerStyles}
          className="mdc-slider__thumb-container">
          {discrete && (
            <div className="mdc-slider__pin">
              <span className="mdc-slider__pin-value-marker">
                {this.state.marker}
              </span>
            </div>
          )}
          <svg className="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div className="mdc-slider__focus-ring" />
        </div>
      </div>
    );
  }
}
