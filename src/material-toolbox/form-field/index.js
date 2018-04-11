// @flow
import * as React from 'react';
import cx from 'classnames';
import MDCFormFieldFoundation from '@material/form-field/foundation';

type Props = {
  children: React.Node,
  label: string,
  alignEnd: boolean,
  cssOnly: boolean,
  onClick?: (evt: Event) => void,
};

type State = {
  onClick?: (evt: Event) => void,
};

export default class FormField extends React.Component<Props, State> {
  static defaultProps = {
    alignEnd: false,
    cssOnly: false,
  };

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.createMDCFormField_();
    }
  }

  componentWillReceiveProps(props: Props) {
    if (this.props.cssOnly !== props.cssOnly) {
      if (props.cssOnly) {
        this.removeMDCFormField_();
      } else {
        this.createMDCFormField_();
      }
    }
  }

  componentWillUnmount() {
    this.removeMDCFormField_();
  }

  mdcFormField_: ?MDCFormFieldFoundation;
  label_: ?HTMLLabelElement;
  input_: ?React.Node;

  createMDCFormField_() {
    this.mdcFormField_ = new MDCFormFieldFoundation({
      registerInteractionHandler: (type, handler) =>
        this.setState({ onClick: handler }),
      deregisterInteractionHandler: () => this.setState({ onClick: undefined }),
      activateInputRipple: () => {
        // $FlowFixMe
        if (this.input_ && this.input_.mdcRipple_) {
          this.input_.mdcRipple_.activate();
        }
      },
      deactivateInputRipple: () => {
        // $FlowFixMe
        if (this.input_ && this.input_.mdcRipple_) {
          this.input_.mdcRipple_.deactivate();
        }
      },
    });
    this.mdcFormField_.init();
  }

  removeMDCFormField_() {
    if (this.mdcFormField_) {
      this.mdcFormField_.destroy();
      delete this.mdcFormField_;
    }
  }

  handleClick_ = (evt: Event) => {
    if (this.state.onClick) {
      this.state.onClick(evt);
    }

    if (this.props.onClick) {
      this.props.onClick(evt);
    }
  };

  render() {
    const { cssOnly, children, label, alignEnd, ...rest } = this.props;
    return (
      <div
        className={cx('mdc-form-field', {
          'mdc-form-field--align-end': alignEnd,
        })}>
        {React.Children.map(children, child => (
          <child.type
            {...child.props}
            ref={element => {
              this.input_ = element;
            }}
          />
        ))}
        <label // eslint-disable-line
          onClick={this.handleClick_}
          {...rest}>
          {label}
        </label>
      </div>
    );
  }
}
