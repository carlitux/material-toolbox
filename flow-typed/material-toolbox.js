// @flow
declare type ThemeProps = {
  textStyle?: 'primary' | 'secondary' | 'hint' | 'disabled' | 'icon',
  theme?: 'primary' | 'secondary' | 'background',
  textVariant?: 'light' | 'dark',
  themeVariant?: 'light' | 'dark',
  textOn?:
    | 'background'
    | 'dark'
    | 'light'
    | 'primary'
    | 'primary-light'
    | 'primary-dark'
    | 'secondary'
    | 'secondary-light'
    | 'secondary-dark',
};

declare class Theme extends React$Component<ThemeProps> {}

declare module 'material-toolbox/ripple' {
  declare export default function createAdapter(
    component: React$Component<any, any>,
    element: HTMLElement | Text | Element,
    options: {
      unbounded?: boolean,
      disabled?: boolean,
      primary?: boolean,
      accent?: boolean,
    },
  ): { [any]: any };
}

declare module 'material-toolbox/typography' {
  declare type TextProps = {
    component: React$ComponentType<any> | string,
    adjustMargin?: boolean,
    textStyle:
      | 'display4'
      | 'display3'
      | 'display2'
      | 'display1'
      | 'headline'
      | 'title'
      | 'subheading2'
      | 'subheading1'
      | 'body2'
      | 'body1'
      | 'caption'
      | 'button',
  };

  declare type TypographyProps = {
    children: React$Element<any>,
  };

  declare export class Typography extends React$Component<TypographyProps> {}

  declare export class Text extends React$Component<TextProps> {}
}

declare module 'material-toolbox/theme' {
  declare export default typeof Theme
}

declare module 'material-toolbox/list' {
  declare type DetailProps = {
    component: React$ComponentType<any> | string,
    end?: boolean,
  };

  declare export class ListDetail extends React$Component<DetailProps> {}

  declare type TextProps = {
    secondary?: boolean,
  };

  declare export class ListText extends React$Component<TextProps> {}

  declare type ItemProps = {
    component?: React$ComponentType<any> | string,
    devider?: boolean,
    inset?: boolean,
    ripple?: boolean,
    disabled?: boolean,
    primary?: boolean,
    accent?: boolean,
  };

  declare export class ListItem extends React$Component<ItemProps> {}

  declare type ListProps = {
    children: Array<React$Element<typeof ListItem>>,
    dark?: boolean,
    dense?: boolean,
    twoLines?: boolean,
    withAvatar?: boolean,
    component?: React$ComponentType<any> | string,
  };

  declare export class List extends React$Component<ListProps> {}

  declare type ListGroupProps = {
    children: Array<
      React$Element<typeof List | typeof ListItem | typeof ListSubheader>,
    >,
  };

  declare export class ListGroup extends React$Component<ListGroupProps> {}

  declare type ListSubheaderProps = {
    component?: React$ComponentType<any> | string,
  };

  declare export class ListSubheader extends React$Component<
    ListSubheaderProps,
  > {}
}

declare module 'material-toolbox/layout-grid' {
  declare type phoneCols = 1 | 2 | 3 | 4;
  declare type tabletCols = phoneCols | 5 | 6 | 7 | 8;
  declare type desktopCols = tabletCols | 9 | 10 | 11 | 12;

  declare type CellProps = {
    align?: 'top' | 'middle' | 'bottom',
    span?: desktopCols,
    order?: desktopCols,
    phone?: phoneCols,
    tablet?: tabletCols,
    desktop?: desktopCols,
  };

  declare export class LayoutCell extends React$Component<CellProps> {}

  declare type GridProps = {
    align?: 'left' | 'right',
    fixed?: boolean,
  };

  declare export class LayoutGrid extends React$Component<GridProps> {}

  declare export class LayoutInner extends React$Component<{}> {}
}

declare module 'material-toolbox/elevation' {
  declare export default class Elevation extends React$Component<{
    elevation: number,
    transition?: boolean,
  }> {}
}

declare module 'material-toolbox/drawer' {
  declare export class DrawerContent extends React$Component<{}> {}

  declare export class DrawerToolbarSpacer extends React$Component<{}> {}

  declare export class DrawerHeader extends React$Component<{}> {}

  declare type ContentType = React$Element<
    | typeof DrawerContent
    | typeof DrawerToolbarSpacer
    | typeof DrawerHeader
    | typeof Theme,
  >;

  declare type PermanentDrawerProps = {
    children: Array<ContentType> | ContentType,
  };

  declare type PersistentDrawerProps = {
    children: Array<ContentType> | ContentType,
    onOpen?: () => void,
    onClose?: () => void,
    open: boolean,
  };

  declare type TemporaryDrawerProps = {
    children: Array<ContentType> | ContentType,
    onOpen?: () => void,
    onClose?: () => void,
    open: boolean,
  };

  declare export class PermanentDrawer extends React$Component<
    PermanentDrawerProps,
  > {}

  declare export class PersistentDrawer extends React$Component<
    PersistentDrawerProps,
  > {}

  declare export class TemporaryDrawer extends React$Component<
    TemporaryDrawerProps,
  > {}
}

declare module 'material-toolbox/button' {
  declare export class Button extends React$Component<{
    component?: 'button' | 'a',
    ripple?: boolean,
    disabled?: boolean,
    primary?: boolean,
    accent?: boolean,
    buttonType?: 'compact' | 'dense',
    buttonVariant?: 'raised' | 'unelevated' | 'stroked',
  }> {}

  declare export class ButtonIcon extends React$Component<{}> {}
}

declare module 'material-toolbox/fab' {
  declare export default class FAB extends React$Component<{
    component?: 'button' | 'a',
    ripple?: boolean,
    disabled?: boolean,
    primary?: boolean,
    accent?: boolean,
    mini?: boolean,
    exited?: boolean,
  }> {}
}

declare module 'material-toolbox/icon-toggle' {
  declare export default class IconToggle extends React$Component<{
    disabled?: boolean,
    pressed?: boolean,
    primary?: boolean,
    accent?: boolean,
    on: { label: string, content?: string, cssClass?: string },
    off: { label: string, content?: string, cssClass?: string },
    onChange?: (evtData: { isOn: boolean }) => void,
  }> {}
}

declare module 'material-toolbox/card' {
  declare export class Card extends React$Component<{
    dark?: boolean,
    component?: React$Component<any> | string,
  }> {}

  declare export class CardActions extends React$Component<{
    vertical?: boolean,
  }> {}

  declare export class CardMedia extends React$Component<{}> {}

  declare export class CardMediaItem extends React$Component<{
    size?: '1dot5x' | '2x' | '3x',
  }> {}

  declare export class CardSupportingText extends React$Component<{}> {}

  declare export class CardHorizontalBlock extends React$Component<{}> {}

  declare export class CardPrimary extends React$Component<{}> {}

  declare export class CardText extends React$Component<{
    isSubtitle?: boolean,
    large?: boolean,
  }> {}
}

declare module 'material-toolbox/dialog' {
  declare export class Dialog extends React$Component<{
    name: string,
    dark?: boolean,
    onAccept?: () => void,
    onCancel?: () => void,
    acceptLabel?: string,
    cancelLabel?: string,
    isAction?: 'accept' | 'cancel',
  }> {}

  declare export class DialogHeader extends React$Component<{}> {}

  declare export class DialogTitle extends React$Component<{}> {}

  declare export class DialogDescription extends React$Component<{
    scrollable?: boolean,
  }> {}
}

declare module 'material-toolbox/grid-list' {
  declare export class GridTileContainer extends React$Component<{
    secondary?: boolean,
  }> {}

  declare export class GridTileIcon extends React$Component<{}> {}

  declare export class GridTileText extends React$Component<{
    support?: boolean,
  }> {}

  declare export class GridTile extends React$Component<{}> {}

  declare export class GridTileContent extends React$Component<{}> {}

  declare export class GridList extends React$Component<{
    gutter?: boolean,
    header?: boolean,
    twoLines?: boolean,
    withIcon?: 'start' | 'end',
    ratio?: '1x1' | '2x3' | '3x2' | '3x4' | '4x3' | '16x9',
  }> {}
}

declare module 'material-toolbox/menu/simple' {
  declare export class SimpleMenu extends React$Component<{
    show?: boolean,
    onCancel: () => void,
    onSelect: (index: number, item: HTMLLIElement) => void,
  }> {}
  declare export class SimpleMenuItem extends React$Component<{}> {}
}

declare module 'material-toolbox/toolbar' {
  declare export class ToolbarIcon extends React$Component<{
    tag?: 'a' | 'span' | 'button',
    isMenu?: boolean,
  }> {}

  declare export class ToolbarTitle extends React$Component<{
    label: string,
    component?: React$ComponentType<any> | string,
  }> {}

  declare export class ToolbarSection extends React$Component<{
    align: 'start' | 'end',
    shrink?: boolean,
  }> {}

  declare export class ToolbarRow extends React$Component<{
    children:
      | Array<React$Element<typeof ToolbarSection>>
      | React$Element<typeof ToolbarSection>,
  }> {}

  declare export class ToolbarFixedAdjust extends React$Component<{}> {}

  declare interface Parent {
    title: ToolbarTitle;
    adjust: ToolbarFixedAdjust;
  }

  declare export class Toolbar extends React$Component<{
    children:
      | Array<React$Element<typeof ToolbarRow>>
      | React$Element<typeof ToolbarRow>,
    fixed?: boolean,
    waterfall?: boolean,
    lastRow?: boolean,
    flexible?: boolean,
    default?: boolean,
    // parent?: Parent,
    onChangeFlexible?: (data: {}) => void,
  }> {}
}

declare module 'material-toolbox/snackbar' {
  declare export default class Snackbar extends React$Component<{
    message: string,
    actionText?: string,
    align?: boolean,
    active?: boolean,
    multiline?: boolean,
    actionOnBottom?: boolean,
    dismiss?: boolean,
    timeout?: number,
    onActionClick: () => void,
  }> {}
}

declare module 'material-toolbox/textfield' {
  declare export class TextFieldIcon extends React$Component<{}> {}
  declare export class TextField extends React$Component<{
    id: string,
    wrapped?: boolean,
    cssOnly?: boolean,
    dense?: boolean,
    hasError?: boolean,
    multiline?: boolean,
    fullWidth?: boolean,
    disabled?: boolean,
    persistentHelp?: boolean,
    withBox?: boolean,
    label?: string,
    value?: string,
    help?: string,
    onIconClick?: () => void,
    onAnimationEnd?: () => void,
    children?: React$Element<typeof TextFieldIcon>,
    icon?: 'leading' | 'trailing',
    style?: { [string]: any },
  }> {}
}

declare module 'material-toolbox/switch' {
  declare export default class Switch extends React$Component<{
    id: string,
    label: string,
  }> {}
}
