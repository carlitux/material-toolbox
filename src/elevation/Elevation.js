// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  transition: boolean,
  elevation: number,
};

const Elevation = ({ children, transition, elevation }: Props) =>
  React.Children.map(children, child => {
    const newClassName = classnames(child.props.className, {
      [`mdc-elevation--z${elevation}`]: elevation >= 0,
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

export default Elevation;
