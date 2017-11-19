// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  className: string,
  size: '1dot5x' | '2x' | '3x',
};

const CardMediaItem = ({ className, size, ...rest }: Props) => (
  // eslint-disable-next-line
  <img {...rest} className={classnames(className, 'mdc-card__media-item', {
      [`mdc-card__media-item--${size}`]: size,
    })}
  />
);

export default CardMediaItem;
