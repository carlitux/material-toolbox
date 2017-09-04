// @flow
declare module 'classnames' {
  declare function classnames(...rest: Array<mixed>): string;
  declare var exports: typeof classnames;
}

declare module '@material/toolbar' {
  declare class MDCToolbarFoundation {
    constructor(handler: any): MDCToolbarFoundation,
    init(): void,
    destroy(): void,
  }
}

declare module '@material/toolbar/util' {
  declare function applyPassive(): any;
}
