// @flow
import * as React from 'react';

import FormField from '../material-toolbox/form-field';
import Button from '../material-toolbox/button/Button';
import Checkbox from '../material-toolbox/checkbox';
import Example from '../Example';

type Props = {};

type State = {
  rtl: boolean,
  alignEnd: boolean,
};

const scssSource = `.custom-checkbox {
  &--all::before,
  &--all::after {
    background-color: #f44336;
  }

  &--all::before {
    opacity: 0.04;
  }

  &--all:not(.mdc-ripple-upgraded):focus::before,
  &--all.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }

  &--all:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }

  &---all:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.16;
  }

  &---all.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.16;
  }

  &--all .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }

  &--all .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
  &--all .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
    border-color: #f44336;
    background-color: #f44336;
  }

  &--all.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--all.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-1;
    animation-name: mdc-checkbox-fade-in-background-1;
  }

  &--all.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--all.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-1;
    animation-name: mdc-checkbox-fade-in-background-1;
  }

  &--all.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--all.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-out-background-1;
    animation-name: mdc-checkbox-fade-out-background-1;
  }

  // Stroke

  &--stroke .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {
    border-color: #2196f3;
    background-color: transparent;
  }

  &--stroke .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
  &--stroke .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }

  &--stroke.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--stroke.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-2;
    animation-name: mdc-checkbox-fade-in-background-2;
  }

  &--stroke.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--stroke.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-out-background-2;
    animation-name: mdc-checkbox-fade-out-background-2;
  }
}

@-webkit-keyframes mdc-checkbox-fade-in-background-1 {
  0% {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }

  50% {
    border-color: #f44336;
    background-color: #f44336;
  }
}

@keyframes mdc-checkbox-fade-in-background-1 {
  0% {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }

  50% {
    border-color: #f44336;
    background-color: #f44336;
  }
}

@-webkit-keyframes mdc-checkbox-fade-out-background-1 {
  0%,
  80% {
    border-color: #f44336;
    background-color: #f44336;
  }

  100% {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }
}

@keyframes mdc-checkbox-fade-out-background-1 {
  0%,
  80% {
    border-color: #f44336;
    background-color: #f44336;
  }

  100% {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }
}

@-webkit-keyframes mdc-checkbox-fade-in-background-2 {
  0% {
    border-color: #2196f3;
    background-color: transparent;
  }

  50% {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }
}

@keyframes mdc-checkbox-fade-in-background-2 {
  0% {
    border-color: #2196f3;
    background-color: transparent;
  }

  50% {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }
}

@-webkit-keyframes mdc-checkbox-fade-out-background-2 {
  0%,
  80% {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }

  100% {
    border-color: #2196f3;
    background-color: transparent;
  }
}

@keyframes mdc-checkbox-fade-out-background-2 {
  0%,
  80% {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }

  100% {
    border-color: #2196f3;
    background-color: transparent;
  }
}
`;

const source = `import FormField from 'material-toolbox/form-field';
import Button from 'material-toolbox/button/Button';
import Checkbox from 'material-toolbox/checkbox';

export default class CssOnly extends React.PureComponent {
  state = {
    rtl: false,
    alignEnd: false,
  };

  toggleRTL = () => {
    this.setState(state => ({ rtl: !state.rtl }));
  };

  toggleAlignEnd = () => {
    this.setState(state => ({ alignEnd: !state.alignEnd }));
  };

  render() {
    const { rtl, alignEnd } = this.state;
    return (
      <div>
        <div dir={rtl ? 'rtl' : undefined}>
          <FormField
            label="Default checkbox"
            alignEnd={alignEnd}
            htmlFor="default-css-only">
            <Checkbox id="default-css-only" cssOnly />
          </FormField>
          &nbsp;
          <Button stroked onClick={this.toggleRTL}>
            Toggle RTL
          </Button>
          &nbsp;
          <Button stroked onClick={this.toggleAlignEnd}>
            Toggle --align-end
          </Button>
        </div>

        <div>
          <FormField label="Disabled checkbox" htmlFor="disabled-css-only">
            <Checkbox id="disabled-css-only" cssOnly disabled />
          </FormField>
        </div>

        <div>
          <FormField
            label="Indeterminate checkbox"
            htmlFor="indeterminate-css-only">
            <Checkbox id="indeterminate-css-only" cssOnly indeterminate />
          </FormField>
        </div>

        <div>
          <FormField
            label="Custom colored checkbox (stroke, fill, ripple, and focus)"
            htmlFor="custom-css-only">
            <Checkbox
              id="custom-css-only"
              className="custom-checkbox custom-checkbox--all"
              cssOnly
            />
          </FormField>
        </div>

        <div>
          <FormField
            label="Custom colored checkbox (stroke and fill only)"
            htmlFor="custom-stroke-css-only">
            <Checkbox
              id="custom-stroke-css-only"
              className="custom-checkbox custom-checkbox--stroke"
              cssOnly
            />
          </FormField>
        </div>
      </div>
    );
  }
}
`;

export default class CssOnly extends React.PureComponent<Props, State> {
  state = {
    rtl: false,
    alignEnd: false,
  };

  toggleRTL = () => {
    this.setState(state => ({ rtl: !state.rtl }));
  };

  toggleAlignEnd = () => {
    this.setState(state => ({ alignEnd: !state.alignEnd }));
  };

  render() {
    const { rtl, alignEnd } = this.state;
    return (
      <div>
        <Example title="CSS Only" source={source} scss={scssSource}>
          <div dir={rtl ? 'rtl' : undefined}>
            <FormField
              label="Default checkbox"
              alignEnd={alignEnd}
              htmlFor="default-css-only">
              <Checkbox id="default-css-only" cssOnly />
            </FormField>
            &nbsp;
            <Button stroked onClick={this.toggleRTL}>
              Toggle RTL
            </Button>
            &nbsp;
            <Button stroked onClick={this.toggleAlignEnd}>
              Toggle --align-end
            </Button>
          </div>

          <div>
            <FormField label="Disabled checkbox" htmlFor="disabled-css-only">
              <Checkbox id="disabled-css-only" cssOnly disabled />
            </FormField>
          </div>

          <div>
            <FormField
              label="Indeterminate checkbox"
              htmlFor="indeterminate-css-only">
              <Checkbox id="indeterminate-css-only" cssOnly indeterminate />
            </FormField>
          </div>

          <div>
            <FormField
              label="Custom colored checkbox (stroke, fill, ripple, and focus)"
              htmlFor="custom-css-only">
              <Checkbox
                id="custom-css-only"
                className="custom-checkbox custom-checkbox--all"
                cssOnly
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Custom colored checkbox (stroke and fill only)"
              htmlFor="custom-stroke-css-only">
              <Checkbox
                id="custom-stroke-css-only"
                className="custom-checkbox custom-checkbox--stroke"
                cssOnly
              />
            </FormField>
          </div>
        </Example>
      </div>
    );
  }
}
