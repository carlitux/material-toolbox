// @flow
declare module 'classnames' {
  declare module.exports: {
    classnames(...rest: Array<mixed>): string,
  };
}

declare module 'react-syntax-highlighter/dist/styles' {
  declare var monokai: any;
}

// declare module '@material/toolbar/util' {
//   declare function applyPassive(): any;
// }
//
// declare module '@material/ripple/util' {
//   declare function applyPassive(): any;
//   declare function supportsCssVariables(window: any): any;
//   declare function getMatchesProperty(element: any): string;
// }
//
// declare module '@material/ripple/foundation' {
//   declare export default class MDCRippleFoundation {
//     constructor(handler: any): MDCRippleFoundation;
//     init(): void;
//     destroy(): void;
//   }
// }

// declare module '@material/drawer/persistent/foundation' {
//   declare export default class MDCPersistentDrawerFoundation {
//     constructor(handler: any): MDCPersistentDrawerFoundation;
//     init(): void;
//     destroy(): void;
//     open(): void;
//     close(): void;
//   }
// }
//
// declare module '@material/drawer/temporary/foundation' {
//   declare export default class MDCTemporaryDrawerFoundation {
//     constructor(handler: any): MDCTemporaryDrawerFoundation;
//     init(): void;
//     destroy(): void;
//     open(): void;
//     close(): void;
//   }
// }

// declare module '@material/drawer/util' {
//   declare function applyPassive(): any;
//   declare function remapEvent(evt: Event): any;
//   declare function getTransformPropertyName(): any;
//   declare function saveElementTabState(el: HTMLElement): any;
//   declare function restoreElementTabState(el: HTMLElement): any;
//   declare function supportsCssCustomProperties(): boolean;
// }

// declare module '@material/drawer/persistent/constants' {
//   declare var strings: {
//     FOCUSABLE_ELEMENTS: string,
//   };
// }
//
// declare module '@material/drawer/temporary/constants' {
//   declare var strings: {
//     FOCUSABLE_ELEMENTS: string,
//     OPACITY_VAR_NAME: string,
//   };
// }
//
// declare module '@material/icon-toggle/foundation' {
//   declare export default class MDCIconToggleFoundation {
//     constructor(handler: any): MDCIconToggleFoundation;
//     init(): void;
//     destroy(): void;
//     refreshToggleData(): void;
//     isKeyboardActivated(): boolean;
//     toggle(isOn: boolean): void;
//     setDisabled(isDisabled: boolean): void;
//   }
// }

declare module 'react-syntax-highlighter/styles/hljs' {
  declare var monokaiSublime: mixed;
}

// declare module '@material/dialog/foundation' {
//   declare export default class MDCDialogFoundation {
//     constructor(handler: any): MDCDialogFoundation;
//     init(): void;
//     destroy(): void;
//     open(): void;
//   }
// }

// declare module '@material/dialog/util' {
//   declare function createFocusTrapInstance(surface: any, button: any): any;
// }

// declare module '@material/grid-list/foundation' {
//   declare export default class MDCGridListFoundation {
//     static strings: {
//       TILE_SELECTOR: string,
//       TILES_SELECTOR: string,
//     };
//     constructor(handler: any): MDCGridListFoundation;
//     init(): void;
//     destroy(): void;
//   }
// }

// declare module '@material/linear-progress/foundation' {
//   declare export default class MDCLinearProgressFoundation {
//     constructor(handler: any): MDCLinearProgressFoundation;
//     init(): void;
//     destroy(): void;
//     setBuffer(value: number): void;
//     setProgress(value: number): void;
//   }
// }

// declare module '@material/menu/simple/foundation' {
//   declare export default class MDCSimpleMenuFoundation {
//     constructor(handler: any): MDCSimpleMenuFoundation;
//     init(): void;
//     destroy(): void;
//     open(params: any): void;
//     close(): void;
//   }
// }

// declare module '@material/menu/util' {
//   declare function getTransformPropertyName(param: any): any;
// }

// declare module '@material/snackbar/foundation' {
//   declare export default class MDCSnackbarFoundation {
//     constructor(handler: any): MDCSnackbarFoundation;
//     init(): void;
//     destroy(): void;
//     show(data: any): void;
//     setDismissOnAction(data: boolean): void;
//     hide(): void;
//   }
// }

// declare module '@material/animation' {
//   declare export function getCorrectEventName(window: any, n: string): string;
// }

// declare module '@material/textfield/foundation' {
//   declare export default class MDCTextFieldFoundation {
//     valid: boolean;
//     constructor(handler: any, map: any): MDCTextFieldFoundation;
//     init(): void;
//     destroy(): void;
//   }
// }

// declare module '@material/textfield/bottom-line/foundation' {
//   declare export default class MDCTextFieldBottomLineFoundation {
//     static strings: {
//       ANIMATION_END_EVENT: string,
//     };
//     constructor(handler: any): MDCTextFieldBottomLineFoundation;
//     init(): void;
//     destroy(): void;
//   }
// }

// declare module '@material/textfield/helper-text/foundation' {
//   declare export default class MDCTextFieldHelperTextFoundation {
//     constructor(handler: any): MDCTextFieldHelperTextFoundation;
//     init(): void;
//     destroy(): void;
//   }
// }

// declare module '@material/slider/foundation' {
//   declare export default class MDCSliderFoundation {
//     constructor(handler: any): MDCSliderFoundation;
//     init(): void;
//     destroy(): void;
//     getValue(): number;
//     setValue(value: number): void;
//     setStep(value: number): void;
//     setMin(value: number): void;
//     setMax(value: number): void;
//     setDisabled(value: boolean): void;
//   }
// }

// declare module '@material/slider/constants' {
//   declare var strings: mixed;
// }

// declare module '@material/select/foundation' {
//   declare export default class MDCSelectFoundation {
//     constructor(handler: any): MDCSelectFoundation;
//     init(): void;
//     destroy(): void;
//     getValue(): string;
//     setDisabled(value: boolean): void;
//   }
// }
