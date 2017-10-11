// @flow
import * as React from 'react';
import classnames from 'classnames';
import { MDCToolbarFoundation } from '@material/toolbar';
import * as util from '@material/toolbar/util';

import ToolbarRow from './Row';

type Props = {
  waitFor: number,
  children: React.ChildrenArray<React.Element<typeof ToolbarRow>>,
  fixed: boolean,
  waterfall: boolean,
  lastRow: boolean,
  flexible: boolean,
  flexibleDefault: boolean,
  onUpdateFixedToolbar: (property: string, value: number) => void,
  onUpdateTitleStyle: (property: string, value: number) => void,
  onChangeFlexible: (data: {}) => void,
};

type State = {
  classes: Set<string>,
  style: { [string]: number },
  firstRowStyle: { [string]: number },
};

function normalizePropToReactStyle(property: string): string {
  return property.replace(/(-.)/g, txt => txt.slice(1).toUpperCase());
}

export default class Toolbar extends React.Component<Props, State> {
  state = {
    classes: new Set(),
    style: {},
    firstRowStyle: {},
  };

  componentDidMount() {
    // NOTE.- Still not sure if we have to wait for sometime to get computed
    // values of dom element on foundation
    setTimeout(() => {
      this.foundation.init();
    }, this.props.waitFor);
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  root: ?HTMLHeadingElement;
  allClasses: Set<string>;

  foundation = new MDCToolbarFoundation({
    addClass: className =>
      this.setState(prevState => {
        prevState.classes.add(className);
        return {
          classes: prevState.classes,
        };
      }),
    removeClass: className =>
      this.setState(prevState => {
        prevState.classes.delete(className);
        return {
          classes: prevState.classes,
        };
      }),
    hasClass: className => this.allClasses.has(className),
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
      if (this.props.onChangeFlexible) {
        this.props.onChangeFlexible({ flexibleExpansionRatio });
      }
    },
    setStyle: (property: string, value: number) => {
      this.setState({
        style: {
          ...this.state.style,
          [normalizePropToReactStyle(property)]: value,
        },
      });
    },
    setStyleForTitleElement: (property: string, value: number) => {
      if (this.props.onUpdateTitleStyle) {
        this.props.onUpdateTitleStyle(
          normalizePropToReactStyle(property),
          value,
        );
      }
    },
    setStyleForFlexibleRowElement: (property: string, value: number) => {
      this.setState({
        firstRowStyle: {
          ...this.state.firstRowStyle,
          [normalizePropToReactStyle(property)]: value,
        },
      });
    },
    setStyleForFixedAdjustElement: (property: string, value: number) => {
      if (this.props.onUpdateFixedToolbar) {
        this.props.onUpdateFixedToolbar(
          normalizePropToReactStyle(property),
          value,
        );
      }
    },
  });

  props: Props;

  render() {
    const className = classnames('mdc-toolbar', ...this.state.classes, {
      'mdc-toolbar--flexible': this.props.flexible,
      'mdc-toolbar--flexible-default-behavior':
        this.props.flexible && this.props.flexibleDefault,
      'mdc-toolbar--fixed': this.props.fixed,
      'mdc-toolbar--fixed-lastrow-only': this.props.fixed && this.props.lastRow,
      'mdc-toolbar--waterfall': this.props.fixed && this.props.waterfall,
    });

    this.allClasses = new Set(className.split(' '));

    return (
      <header
        style={this.state.style}
        className={className}
        ref={root => {
          this.root = root;
        }}>
        {React.Children.map(this.props.children, (child, index) => {
          if (index === 0) {
            // $FlowFixMe: Needs to cast
            return React.cloneElement(child, {
              style: this.state.firstRowStyle,
            });
          }
          return child;
        })}
      </header>
    );
  }
}