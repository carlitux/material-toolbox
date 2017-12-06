// @flow
import * as React from 'react';
import classnames from 'classnames';
import MDCToolbarFoundation from '@material/toolbar/foundation';
import * as util from '@material/toolbar/util';

import ToolbarRow from './Row';
import { normalizePropToReactStyle } from '../utils';

type Props = {
  className: string,
  children:
    | React.ChildrenArray<React.Element<typeof ToolbarRow>>
    | React.Element<typeof ToolbarRow>,
  fixed: boolean,
  waterfall: boolean,
  lastRow: boolean,
  flexible: boolean,
  default: boolean,
  parent: mixed,
  // parent: { title?: typeof ToolbarTitle, adjust?: typeof ToolbarFixedAdjust },
  onChangeFlexible: (data: {}) => void,
  style: { [string]: number },
};

type State = {
  classes: { [string]: boolean },
  style: { [string]: number },
  firstRowStyle: { [string]: number },
};

export default class Toolbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      classes: {
        'mdc-toolbar': true,
        'mdc-toolbar--fixed': props.fixed,
        'mdc-toolbar--waterfall': props.fixed && props.waterfall,
        'mdc-toolbar--flexible': !!props.flexible,
        'mdc-toolbar--fixed-lastrow-only': props.fixed && props.lastRow,
        'mdc-toolbar--flexible-default-behavior': !!(
          props.flexible && props.default
        ),
      },
      style: {},
      firstRowStyle: {},
    };
  }

  componentDidMount() {
    // NOTE.- Still not sure if we have to wait for sometime to get computed
    // values of dom element on foundation
    if ((this.props.waterfall && this.props.fixed) || this.props.flexible) {
      setTimeout(() => {
        this.foundation.init();
      }, 2000);
    }
  }

  componentWillReceiveProps(props: Props) {
    if ((this.props.waterfall && this.props.fixed) || this.props.flexible) {
      this.setState(
        state => ({
          classes: {
            ...state.classes,
            'mdc-toolbar--fixed': props.fixed,
            'mdc-toolbar--waterfall': props.fixed && props.waterfall,
            'mdc-toolbar--flexible': !!props.flexible,
            'mdc-toolbar--fixed-lastrow-only': props.fixed && props.lastRow,
            'mdc-toolbar--flexible-default-behavior': !!(
              props.flexible && props.default
            ),
          },
        }),
        () => {
          this.foundation.init();
        },
      );
    }
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  root: ?HTMLElement;

  foundation = new MDCToolbarFoundation({
    addClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: true },
      })),
    removeClass: className =>
      this.setState(state => ({
        classes: { ...state.classes, [className]: false },
      })),
    hasClass: className => this.state.classes[className],
    registerScrollHandler: handler =>
      window.addEventListener('scroll', handler, util.applyPassive()),
    deregisterScrollHandler: handler =>
      window.removeEventListener('scroll', handler, util.applyPassive()),
    registerResizeHandler: handler =>
      window.addEventListener('resize', handler),
    deregisterResizeHandler: handler =>
      window.removeEventListener('resize', handler),
    getViewportWidth: () => window.innerWidth,
    getViewportScrollY: () => window.pageYOffset,
    getOffsetHeight: () => (this.root ? this.root.offsetHeight : 0),
    getFirstRowElementOffsetHeight: () => {
      if (this.root && this.root.firstChild) {
        // $FlowFixMe
        return this.root.firstChild.offsetHeight;
      }
      return 0;
    },
    notifyChange: ({
      flexibleExpansionRatio,
    }: {
      flexibleExpansionRatio: number,
    }) => {
      this.props.onChangeFlexible &&
        this.props.onChangeFlexible({ flexibleExpansionRatio });
    },
    setStyle: (property: string, value: number) => {
      this.setState(state => ({
        style: {
          ...this.state.style,
          [normalizePropToReactStyle(property)]: value,
        },
      }));
    },
    setStyleForTitleElement: (property: string, value: number) => {
      // $FlowFixMe
      this.props.parent.title.setStyle(
        normalizePropToReactStyle(property),
        value,
      );
    },
    setStyleForFlexibleRowElement: (property: string, value: number) => {
      this.setState(state => ({
        firstRowStyle: {
          ...this.state.firstRowStyle,
          [normalizePropToReactStyle(property)]: value,
        },
      }));
    },
    setStyleForFixedAdjustElement: (property: string, value: number) => {
      // $FlowFixMe
      this.props.parent.adjust.setStyle(
        normalizePropToReactStyle(property),
        value,
      );
    },
  });

  render() {
    const {
      flexible,
      default: default_,
      className,
      fixed,
      waterfall,
      parent,
      style,
      lastRow,
      ...rest
    } = this.props;
    const rootClassName = classnames(className, this.state.classes);

    return (
      <header
        {...rest}
        style={{ ...this.props.style, ...this.state.style }}
        className={rootClassName}
        ref={root => {
          this.root = root;
        }}>
        {React.Children.map(
          this.props.children,
          (child, index) =>
            index === 0 ? (
              <child.type
                {...child.props}
                style={{ ...child.style, ...this.state.firstRowStyle }}
              />
            ) : (
              child
            ),
        )}
      </header>
    );
  }
}
