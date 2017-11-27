// @flow
import * as React from 'react';
import classnames from 'classnames';

import MDCGridListFoundation from '@material/grid-list/foundation';

type Props = {
  children: React.Node,
  className: string,
  gutter: boolean,
  header: boolean,
  twoLines: boolean,
  withIcon: 'start' | 'end',
  ratio: '16x9' | '4x3' | '3x4' | '2x3' | '3x2' | '1x1',
};

export default class GridList extends React.Component<Props> {
  componentDidMount() {
    this.mdcGridList.init();
  }

  componentWillUnmount() {
    this.mdcGridList.destroy();
  }

  root: ?HTMLDivElement;
  mdcGridList: MDCGridListFoundation;

  mdcGridList = new MDCGridListFoundation({
    getOffsetWidth: () => this.root && this.root.offsetWidth,
    getNumberOfTiles: () =>
      this.root &&
      this.root.querySelectorAll(MDCGridListFoundation.strings.TILE_SELECTOR)
        .length,
    getOffsetWidthForTileAtIndex: index =>
      this.root &&
      this.root.querySelectorAll(MDCGridListFoundation.strings.TILE_SELECTOR)[
        index
      ].offsetWidth,
    setStyleForTilesElement: (property, value) => {
      if (this.root) {
        const ele = this.root.querySelector(
          MDCGridListFoundation.strings.TILES_SELECTOR,
        );
        if (ele) {
          ele.style[property] = value;
        }
      }
    },
    registerResizeHandler: handler =>
      window.addEventListener('resize', handler),
    deregisterResizeHandler: handler =>
      window.removeEventListener('resize', handler),
  });

  render() {
    const {
      className,
      children,
      gutter,
      header,
      twoLines,
      withIcon,
      ratio,
      ...rest
    } = this.props;
    const cn = classnames(className, 'mdc-grid-list', {
      'mdc-grid-list--tile-gutter-1': gutter,
      'mdc-grid-list--header-caption': header,
      'mdc-grid-list--twoline-caption': twoLines,
      'mdc-grid-list--with-icon-align-start': withIcon === 'start',
      'mdc-grid-list--with-icon-align-end': withIcon === 'end',
      [`mdc-grid-list--tile-aspect-${ratio}`]: ratio,
    });

    return (
      <div
        ref={element => {
          this.root = element;
        }}
        {...rest}
        className={cn}>
        <ul className="mdc-grid-list__tiles">{children}</ul>
      </div>
    );
  }
}
