// @flow
import * as React from 'react';
import classnames from 'classnames';

import MDCSelectFoundation from '@material/select/foundation';
import MDCRippleFoundation from '@material/ripple/foundation';

import { createAdapter } from '../ripple';
import { Menu } from '../menu';
import { normalizePropToReactStyle } from '../utils';

type Props = {
  children: React.Node,
  className: string,
  disabled: boolean,
  multiple: boolean,
  cssOnly: boolean,
  onChange: (value: string) => void,
};

type State = {
  rootClasses: { [string]: boolean },
  labelClasses: { [string]: boolean },
  bottomLineClasses: { [string]: boolean },
  tabIndex: ?number,
  show: number | boolean,
  bottomLineAttrs: { [string]: any },
  menuStyles: { [string]: any },
  onSelect: ?(data: any) => void,
  onCancel: ?() => void,
  selectedText: ?string,
  selectedIndex: ?number,
  // NOTE.- These are the fields for ripple, select surface element
  styles: { [string]: any },
  classes: { [string]: boolean },
};

export default class Select extends React.Component<Props, State> {
  state = {
    classes: {},
    rootClasses: {},
    labelClasses: {},
    bottomLineClasses: {},
    styles: {},
    menuStyles: {},
    bottomLineAttrs: {},
    tabIndex: null,
    show: false,
    onSelect: null,
    onCancel: null,
    selectedText: null,
    selectedIndex: null,
  };

  componentDidMount() {
    this.processOptionsData(this.props);
    if (!this.props.cssOnly && !this.props.multiple) {
      setTimeout(() => {
        this.bootstrapRipple();
        this.mdcSelect.setDisabled(this.props.disabled);
        this.mdcSelect.init();
      }, 1500);
    }
  }

  componentWillReceiveProps(props: Props) {
    this.processOptionsData(props);
    this.mdcSelect.setDisabled(props.disabled);
  }

  componentWillUnmount() {
    this.mdcSelect.destroy();
  }

  onSelect = (index: number) => {
    this.setState({ show: false });
    if (this.state.onSelect) {
      this.state.onSelect({ detail: { index } });
    }
  };

  onCancel = () => {
    this.setState({ show: false });
    if (this.state.onCancel) {
      this.state.onCancel();
    }
  };

  root: ?HTMLDivElement;
  surface: ?HTMLDivElement;
  menu: ?Menu;
  mdcRipple: MDCRippleFoundation;
  mdcRippleAdapter: { [any]: any };
  options: Array<{ [any]: any }>;
  optionsElement: Array<any>;

  bootstrapRipple() {
    if (this.mdcRipple) {
      this.mdcRipple.destroy();
    }

    if (this.surface) {
      this.mdcRippleAdapter = createAdapter(this, this.surface, {});
      this.mdcRipple = new MDCRippleFoundation(this.mdcRippleAdapter);
      this.mdcRipple.init();
    }
  }

  processOptionsData(props: Props) {
    this.options = React.Children.toArray(props.children);
  }

  mdcSelect = new MDCSelectFoundation({
    addClass: className =>
      this.setState(state => ({
        rootClasses: {
          ...state.rootClasses,
          [className]: true,
        },
      })),
    removeClass: className =>
      this.setState(state => ({
        rootClasses: {
          ...state.rootClasses,
          [className]: false,
        },
      })),
    addClassToLabel: className =>
      this.setState(state => ({
        labelClasses: {
          ...state.labelClasses,
          [className]: true,
        },
      })),
    removeClassFromLabel: className =>
      this.setState(state => ({
        labelClasses: {
          ...state.labelClasses,
          [className]: false,
        },
      })),
    addClassToBottomLine: className =>
      this.setState(state => ({
        bottomLineClasses: {
          ...state.bottomLineClasses,
          [className]: true,
        },
      })),
    removeClassFromBottomLine: className =>
      this.setState(state => ({
        bottomLineClasses: {
          ...state.bottomLineClasses,
          [className]: false,
        },
      })),
    setBottomLineAttr: (attr, value) => {
      let newValue: string | {} = value;

      if (attr === 'style') {
        const parsed = value.split(':').map(item => item.trim());
        newValue = { [normalizePropToReactStyle(parsed[0])]: parsed[1] };
      }

      this.setState(state => ({
        bottomLineAttrs: { ...state.bottomLineAttrs, [attr]: newValue },
      }));
    },
    // NOTE.- Not used
    // setAttr: (attr, value) => console.log('set', attr, value),
    // rmAttr: (attr, value) => console.log(attr, value),
    computeBoundingRect: () =>
      this.surface && this.surface.getBoundingClientRect(),
    registerInteractionHandler: (type, handler) =>
      this.surface && this.surface.addEventListener(type, handler),
    deregisterInteractionHandler: (type, handler) =>
      this.surface && this.surface.removeEventListener(type, handler),
    focus: () => this.surface && this.surface.focus(),
    makeTabbable: () => {
      this.setState({ tabIndex: 0 });
    },
    makeUntabbable: () => {
      this.setState({ tabIndex: -1 });
    },
    getComputedStyleValue: prop =>
      this.surface &&
      window.getComputedStyle(this.surface).getPropertyValue(prop),
    setStyle: (propertyName, value) =>
      this.setState(state => ({
        styles: {
          ...state.styles,
          [propertyName]: value,
        },
      })),
    create2dRenderingContext: () =>
      document.createElement('canvas').getContext('2d'),
    setMenuElStyle: (propertyName, value) =>
      this.setState(state => ({
        menuStyles: {
          ...state.menuStyles,
          [normalizePropToReactStyle(propertyName)]: value,
        },
      })),
    // NOTE: not used !!!!
    // setMenuElAttr: (attr, value) =>
    //   this.menuEl_.setAttribute(attr, value),
    // rmMenuElAttr: attr =>
    //   this.menuEl_.removeAttribute(attr),
    getMenuElOffsetHeight: () => this.menu && this.menu.getOffsetHeight(),
    openMenu: focusIndex =>
      this.setState({ show: focusIndex === 0 ? true : focusIndex }),
    isMenuOpen: () => !!this.state.show,
    setSelectedTextContent: selectedTextContent => {
      this.setState({ selectedText: selectedTextContent });
    },
    getNumberOfOptions: () => (this.options ? this.options.length : 0),
    getTextForOptionAtIndex: index => this.options[index].props.children,
    getValueForOptionAtIndex: index =>
      this.options[index].props.value || this.options[index].props.children,
    setAttrForOptionAtIndex: (index, attr, value) =>
      this.setState({ selectedIndex: index }),
    // NOTE.- Not used
    // rmAttrForOptionAtIndex: (index, attr) =>
    //   console.log(index, attr) && this.options[index].removeAttribute(attr),
    getOffsetTopForOptionAtIndex: index =>
      this.optionsElement[index].getOffsetTop(),
    registerMenuInteractionHandler: (type, handler) => {
      const actionType = type.split(':')[1];
      this.setState({
        [actionType === 'cancel' ? 'onCancel' : 'onSelect']: handler,
      });
    },
    // NOTE: not used !!!!
    // deregisterMenuInteractionHandler: (type, handler) =>
    //   this.menu_.unlisten(type, handler),
    notifyChange: () =>
      this.props.onChange && this.props.onChange(this.mdcSelect.getValue()),
    getWindowInnerHeight: () => window.innerHeight,
    addBodyClass: className =>
      document.body &&
      document.body.classList &&
      document.body.classList.add(className),
    removeBodyClass: className =>
      document.body &&
      document.body.classList &&
      document.body.classList.remove(className),
  });

  render() {
    const {
      cssOnly,
      multiple,
      disabled,
      className,
      children,
      ...rest
    } = this.props;

    if (cssOnly) {
      return (
        <div className="mdc-select">
          <select {...rest} className="mdc-select__surface">
            {React.Children.map(children, child => (
              <child.type {...child.props} cssOnly />
            ))}
          </select>
          <div className="mdc-select__bottom-line" />
        </div>
      );
    }

    if (multiple) {
      return (
        <select {...rest} multiple className="mdc-multi-select mdc-list">
          {React.Children.map(children, child => (
            <child.type {...child.props} multiple />
          ))}
        </select>
      );
    }

    const rootClassName = classnames(
      'mdc-select',
      className,
      this.state.rootClasses,
    );

    const surfaceClassName = classnames(
      this.state.classes,
      'mdc-select__surface',
    );

    const bottomLineClasses = classnames(
      this.state.bottomLineClasses,
      'mdc-select__bottom-line',
    );

    const labelClasses = classnames(
      this.state.labelClasses,
      'mdc-select__label',
    );

    this.optionsElement = [];

    return (
      <div
        ref={element => {
          this.root = element;
        }}
        className={rootClassName}
        aria-disabled={disabled ? 'true' : undefined}
        role="listbox">
        <div
          ref={element => {
            this.surface = element;
          }}
          style={this.state.styles}
          tabIndex={this.state.tabIndex}
          className={surfaceClassName}>
          <div className={labelClasses}>Food Group</div>
          <div className="mdc-select__selected-text">
            {this.state.selectedText}
          </div>
          <div {...this.state.bottomLineAttrs} className={bottomLineClasses} />
        </div>
        <Menu
          ref={element => {
            this.menu = element;
          }}
          onSelect={this.onSelect}
          onCancel={this.onCancel}
          style={this.state.menuStyles}
          show={this.state.show}
          role={undefined}
          className="mdc-select__menu">
          {React.Children.map(children, (child, index) => (
            <child.type
              {...child.props}
              ref={element => {
                this.optionsElement[index] = element;
              }}
              role="option"
              aria-selected={
                this.state.selectedIndex === index ? 'true' : undefined
              }
            />
          ))}
        </Menu>
      </div>
    );
  }
}
