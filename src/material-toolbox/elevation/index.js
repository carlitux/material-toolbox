// @flow
import * as React from 'react';
import cx from 'classnames';

type Props = {
  children: React.Node,
  depth: number,
  transition?: boolean,
  className?: string,
};

const Elevation = ({ children, className, transition, depth }: Props) =>
  React.Children.map(children, child => {
    const newClassName = cx(className, child.props.className, {
      [`mdc-elevation--z${depth}`]: depth >= 0,
      'mdc-elevation-transition': transition,
    });
    return (
      <child.type
        {...child.props}
        className={newClassName}
        ref={node => {
          const { ref } = child;
          if (typeof ref === 'function') {
            ref(node);
          }
        }}
      />
    );
  });

Elevation.defaultProps = {
  depth: 0,
  transition: false,
};

export default Elevation;
