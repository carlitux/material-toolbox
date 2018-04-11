// For importing css files
declare module CSSModule {
  declare module.exports: { [key: string]: string };
}

declare module 'react-syntax-highlighter/styles/hljs' {
  declare module.exports: any;
}
