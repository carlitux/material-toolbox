// @flow
import * as React from 'react';
import cx from 'classnames';

import MDCTabBarFoundation from '@material/tabs/tab-bar/foundation';

import type Tab from './Tab';

// TODO: Only accept tabs as children
type Props = {
  className?: string,
  cssOnly: boolean,
  children?: React.Node,
  refreshAt: number,
  onChange?: (index: number, tab: Tab) => void,
  defaultActive?: number,
};

type State = {
  classNames: { [string]: boolean },
  tabIndicatorStyles: { [string]: any },
};

export default class TabBar extends React.Component<Props, State> {
  static defaultProps = {
    className: undefined,
    cssOnly: false,
    children: null,
    defaultActive: undefined,
    refreshAt: 200,
  };

  state = {
    classNames: {},
    tabIndicatorStyles: {},
  };

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.createMDCTabBar_();
      if (
        this.props.defaultActive !== null &&
        this.props.defaultActive !== undefined &&
        this.mdcTabBar_
      ) {
        this.mdcTabBar_.switchToTabAtIndex(this.props.defaultActive, false);
      }

      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, this.props.refreshAt);
    }
  }

  componentWillReceiveProps(props: Props) {
    if (this.props.cssOnly !== props.cssOnly) {
      if (props.cssOnly) {
        this.removeMDCTabBar_();
      } else {
        this.createMDCTabBar_();
      }
    }
  }

  componentWillUnmount() {
    this.removeMDCTabBar_();
  }

  mdcTabBar_: ?MDCTabBarFoundation;
  tabBar_: ?HTMLElement;
  tabIndicator: ?HTMLSpanElement;
  tabs_: Array<Tab> = [];

  createMDCTabBar_() {
    this.mdcTabBar_ = new MDCTabBarFoundation({
      addClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: true },
        })),
      removeClass: className =>
        this.setState(state => ({
          classNames: { ...state.classNames, [className]: undefined },
        })),
      registerResizeHandler: handler =>
        window.addEventListener('resize', handler),
      deregisterResizeHandler: handler =>
        window.removeEventListener('resize', handler),
      getOffsetWidth: () => this.tabBar_ && this.tabBar_.offsetWidth,
      setStyleForIndicator: (propertyName, value) =>
        this.setState(state => ({
          tabIndicatorStyles: {
            ...state.tabIndicatorStyles,
            [propertyName]: value,
          },
        })),
      notifyChange: console.log,
      getOffsetWidthForIndicator: () =>
        this.tabIndicator && this.tabIndicator.offsetWidth,
      getNumberOfTabs: () => React.Children.count(this.props.children),
      isTabActiveAtIndex: index =>
        this.tabs_[index] && this.tabs_[index].props.active,
      isDefaultPreventedOnClickForTabAtIndex: index =>
        this.tabs_[index].preventDefaultOnClick,
      setPreventDefaultOnClickForTabAtIndex: (index, preventDefaultOnClick) => {
        this.tabs_[index].preventDefaultOnClick = preventDefaultOnClick;
      },
      measureTabAtIndex: index =>
        this.tabs_[index] && this.tabs_[index].measureSelf(),
      getComputedWidthForTabAtIndex: index =>
        this.tabs_[index] && this.tabs_[index].computedWidth,
      getComputedLeftForTabAtIndex: index =>
        this.tabs_[index] && this.tabs_[index].computedLeft,
    });

    this.mdcTabBar_.init();
  }

  removeMDCTabBar_() {
    if (this.mdcTabBar_) {
      this.mdcTabBar_.destroy();
      delete this.mdcTabBar_;
    }
  }

  handleNotify = ({ tab }: { tab: Tab }) => {
    const index = this.tabs_.indexOf(tab);

    if (this.mdcTabBar_) {
      this.mdcTabBar_.switchToTabAtIndex(index, false);
    }

    if (this.props.onChange) {
      this.props.onChange(index, tab);
    }
  };

  render() {
    const {
      defaultActive,
      refreshAt,
      className,
      cssOnly,
      children,
      ...rest
    } = this.props;
    return (
      <nav
        {...rest}
        role="tablist" // eslint-disable-line
        className={cx(className, 'mdc-tab-bar', this.state.classNames)}
        ref={element => {
          this.tabBar_ = element;
        }}>
        {React.Children.map(children, (child, index) => (
          <child.type
            ref={element => {
              this.tabs_[index] = element;
            }}
            {...child.props}
            cssOnly_={cssOnly}
            onNotify_={this.handleNotify}
          />
        ))}
        {!cssOnly && (
          <span
            ref={element => {
              this.tabIndicator = element;
            }}
            className="mdc-tab-bar__indicator"
            style={this.state.tabIndicatorStyles}
          />
        )}
      </nav>
    );
  }
}
