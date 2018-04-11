// @flow
import * as React from 'react';
import classnames from 'classnames';

type Props = {
  children: React.Node,
  isSubtitle: boolean,
  large: boolean,
  className: string,
};

const CardText = ({
  className,
  children,
  isSubtitle,
  large,
  ...rest
}: Props) => {
  const Component = isSubtitle ? 'h2' : 'h1';
  const cn = isSubtitle
    ? classnames(className, 'mdc-card__subtitle')
    : classnames(className, 'mdc-card__title', {
        'mdc-card__title--large': large,
      });

  return (
    <Component {...rest} className={cn}>
      {children}
    </Component>
  );
};

export default CardText;
