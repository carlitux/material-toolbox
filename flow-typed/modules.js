// @flow
declare module 'classnames' {
  declare function classnames(...rest: Array<mixed>): string;
  declare var exports: typeof classnames;
}

declare module 'react-syntax-highlighter/dist/styles' {
  declare var monokai: any;
}

declare module '@material/toolbar/util' {
  declare function applyPassive(): any;
}

declare module '@material/ripple/util' {
  declare function applyPassive(): any;
  declare function supportsCssVariables(window: any): any;
  declare function getMatchesProperty(element: any): string;
}

declare module '@material/ripple/foundation' {
  declare export default class MDCRippleFoundation {
    constructor(handler: any): MDCRippleFoundation;
    init(): void;
    destroy(): void;
  }
}

declare module '@material/drawer/persistent/foundation' {
  declare export default class MDCPersistentDrawerFoundation {
    constructor(handler: any): MDCPersistentDrawerFoundation;
    init(): void;
    destroy(): void;
    open(): void;
    close(): void;
  }
}

declare module '@material/drawer/temporary/foundation' {
  declare export default class MDCTemporaryDrawerFoundation {
    constructor(handler: any): MDCTemporaryDrawerFoundation;
    init(): void;
    destroy(): void;
    open(): void;
    close(): void;
  }
}

declare module '@material/drawer/util' {
  declare function applyPassive(): any;
  declare function remapEvent(evt: Event): any;
  declare function getTransformPropertyName(): any;
  declare function saveElementTabState(el: HTMLElement): any;
  declare function restoreElementTabState(el: HTMLElement): any;
  declare function supportsCssCustomProperties(): boolean;
}

declare module '@material/drawer/persistent/constants' {
  declare var strings: {
    FOCUSABLE_ELEMENTS: string,
  };
}

declare module '@material/drawer/temporary/constants' {
  declare var strings: {
    FOCUSABLE_ELEMENTS: string,
    OPACITY_VAR_NAME: string,
  };
}

declare module '@material/icon-toggle/foundation' {
  declare export default class MDCIconToggleFoundation {
    constructor(handler: any): MDCIconToggleFoundation;
    init(): void;
    destroy(): void;
    refreshToggleData(): void;
    isKeyboardActivated(): boolean;
    toggle(isOn: boolean): void;
    setDisabled(isDisabled: boolean): void;
  }
}

declare module 'react-syntax-highlighter/dist/styles/hljs' {
  declare var monokaiSublime: mixed;
}

declare module '@material/dialog/foundation' {
  declare export default class MDCDialogFoundation {
    constructor(handler: any): MDCDialogFoundation;
    init(): void;
    destroy(): void;
    open(): void;
  }
}

declare module '@material/dialog/util' {
  declare function createFocusTrapInstance(surface: any, button: any): any;
}
