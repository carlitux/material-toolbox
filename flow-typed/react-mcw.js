// @flow

declare module 'react-mcw/typography' {
  declare type TextProps = {
    component: React$ComponentType<*> | string,
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

declare module 'react-mcw/theme' {
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
