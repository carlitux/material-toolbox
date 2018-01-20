// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  className: string,
};

export default class TextFieldIcon extends React.Component<Props> {
  root: ?HTMLElement;

  registerInteractionHandler(evtType: string, handler: any) {
    this.root && this.root.addEventListener(evtType, handler);
  }

  deregisterInteractionHandler(evtType: string, handler: any) {
    this.root && this.root.removeEventListener(evtType, handler);
  }

  render() {
    const { className, ...rest } = this.props;

    return (
      <i
        {...rest}
        ref={element => {
          this.root = element;
        }}
        className={classnames('mdc-text-field__icon', className)}
      />
    );
  }
}
