// @flow
declare module 'classnames' {
  declare function classnames(...rest: Array<mixed>): string;
  declare var exports: typeof classnames;
}

declare module 'react-syntax-highlighter/dist/styles' {
  declare var monokai: any;
}

declare module '@material/toolbar' {
  declare class MDCToolbarFoundation {
    constructor(handler: any): MDCToolbarFoundation;
    init(): void;
    destroy(): void;
  }
}

declare module '@material/toolbar/util' {
  declare function applyPassive(): any;
}

declare module '@material/drawer' {
  declare class MDCPersistentDrawerFoundation {
    constructor(handler: any): MDCPersistentDrawerFoundation;
    init(): void;
    destroy(): void;
    open(): void;
    close(): void;
  }

  declare class MDCTemporaryDrawerFoundation {
    constructor(handler: any): MDCTemporaryDrawerFoundation;
    init(): void;
    destroy(): void;
    open(): void;
    close(): void;
  }

  declare var util: {
    applyPassive(): any,
    remapEvent(evt: Event): any,
    getTransformPropertyName(): any,
    saveElementTabState(el: HTMLElement): any,
    restoreElementTabState(el: HTMLElement): any,
    supportsCssCustomProperties(): boolean,
  };
}

declare module '@material/drawer/persistent/constants' {
  declare var FOCUSABLE_ELEMENTS: string;
}

declare module '@material/drawer/temporary/constants' {
  declare var FOCUSABLE_ELEMENTS: string;
  declare var OPACITY_VAR_NAME: string;
}
