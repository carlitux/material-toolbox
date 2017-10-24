// @flow

declare module 'material-toolbox/typography' {
  declare type TextProps = {
    component: React$ComponentType<any> | string,
    className?: string,
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
    className?: string,
  };

  declare export class Typography extends React$Component<TypographyProps> {}

  declare export class Text extends React$Component<TextProps> {}
}

declare module 'material-toolbox/theme' {
  declare type Props = {
    children: React$Node,
    className?: string,
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

  declare export default class Theme extends React$Component<Props> {}
}

declare module 'material-toolbox/list' {
  declare type DetailProps = {
    children?: React$Node,
    className?: string,
    component: React$ComponentType<any> | string,
    end?: boolean,
  };

  declare export class ListDetail extends React$Component<DetailProps> {}

  declare type TextProps = {
    children: React$Node,
    secondary?: boolean,
    className?: string,
  };

  declare export class ListText extends React$Component<TextProps> {}

  declare type ItemProps = {
    children?: React$Node,
    component?: React$ComponentType<any> | string,
    devider?: boolean,
    inset?: boolean,
    className?: string,
    rippleRef?: React$Ref<any>,
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
    className?: string,
  };

  declare export class ListGroup extends React$Component<ListGroupProps> {}

  declare type ListSubheaderProps = {
    className?: string,
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
    className?: string,
    span?: desktopCols,
    order?: desktopCols,
    phone?: phoneCols,
    tablet?: tabletCols,
    desktop?: desktopCols,
  };

  declare export class LayoutCell extends React$Component<CellProps> {}

  declare type GridProps = {
    className?: string,
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
