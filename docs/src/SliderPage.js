// @flow
/* eslint-disable */
import * as React from 'react';
import Highlighter from './Highlighter';

import { LayoutCell } from 'material-toolbox/layout-grid';
import { Text } from 'material-toolbox/typography';
import Theme from 'material-toolbox/theme';
import { Button } from 'material-toolbox/button';
import Slider from 'material-toolbox/slider';
/* eslint-enable */

import ThemedLink from './ThemedLink';
import styles from './styles.scss';

const importComponents = `import Slider from 'material-toolbox/slider';`;
const cbSignature = '(value: number) => void';

export default class SliderPage extends React.Component<
  {},
  {
    slider1Input: number,
    slider1Change: number,
    slider2Input: number,
    slider2Change: number,
    slider3Input: number,
    slider3Change: number,
    slider4Input: number,
    slider4Change: number,
    min: number,
    max: number,
    step: number,
    disabled: boolean,
  },
> {
  state = {
    slider1Input: 45,
    slider1Change: 45,
    slider2Input: 45,
    slider2Change: 45,
    slider3Input: 45,
    slider3Change: 45,
    slider4Input: 45,
    slider4Change: 45,
    min: 0,
    max: 50,
    step: 0,
    disabled: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  handleChangeMin = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({
      min: +event.currentTarget.value,
    });
  };

  handleChangeMax = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({
      max: +event.currentTarget.value,
    });
  };

  handleChangeStep = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({
      step: +event.currentTarget.value,
    });
  };

  handleInput1 = (value: number) => {
    this.setState({
      slider1Input: value,
    });
  };

  handleChange1 = (value: number) => {
    this.setState({
      slider1Change: value,
    });
  };

  handleInput2 = (value: number) => {
    this.setState({
      slider2Input: value,
    });
  };

  handleChange2 = (value: number) => {
    this.setState({
      slider2Change: value,
    });
  };

  handleInput3 = (value: number) => {
    this.setState({
      slider3Input: value,
    });
  };

  handleChange3 = (value: number) => {
    this.setState({
      slider3Change: value,
    });
  };

  handleInput4 = (value: number) => {
    this.setState({
      slider4Input: value,
    });
  };

  handleChange4 = (value: number) => {
    this.setState({
      slider4Change: value,
    });
  };

  render() {
    return (
      <LayoutCell align="bottom" span={12}>
        <Text component="h1" textStyle="display1">
          Slider
        </Text>

        <Text component="h2" textStyle="headline">
          Slider component is a React wrapper of mdc-slider component.
        </Text>

        <Text component="h3" textStyle="title">
          Design & API Documentation
        </Text>

        <p>
          <ThemedLink
            to="https://material.io/guidelines/components/sliders.html"
            target="_blank">
            Material Design guidelines: Sliders
          </ThemedLink>
        </p>

        <p>
          <ThemedLink
            to="https://material.io/components/web/catalog/input-controls/sliders/"
            target="_blank">
            Material Components Web Css and Scss customization
          </ThemedLink>
        </p>

        <Text component="h1" textStyle="display1">
          React components
        </Text>

        <Text component="h3" textStyle="title">
          Import
        </Text>

        <Highlighter language="javascript">{importComponents}</Highlighter>

        <Text component="h3" textStyle="title">
          Slider
        </Text>

        <table className={styles['table-doc']}>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value</td>
              <td>number</td>
              <td />
              <td />
              <td>Value that will be set on slider</td>
            </tr>
            <tr>
              <td>min</td>
              <td>number</td>
              <td>0</td>
              <td />
              <td>Min value on slider</td>
            </tr>
            <tr>
              <td>step</td>
              <td>number</td>
              <td>1</td>
              <td />
              <td>Step to use on discrete slider</td>
            </tr>
            <tr>
              <td>max</td>
              <td>number</td>
              <td>100</td>
              <td />
              <td>Max value on slider</td>
            </tr>
            <tr>
              <td>onInput</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>callback called when changing the slider.</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{cbSignature}</td>
              <td />
              <td />
              <td>callback called when slider changed the value.</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td />
              <td />
              <td>Text used on asistable devices.</td>
            </tr>
            <tr>
              <td>showMarkers</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Show markers on discrete slider</td>
            </tr>
            <tr>
              <td>discrete</td>
              <td>boolean</td>
              <td />
              <td />
              <td>Create a discrete slider</td>
            </tr>
          </tbody>
        </table>

        <section>
          <Text component="h3" textStyle="title">
            Continuous Slider
          </Text>
          <Slider
            value={this.state.slider1Change}
            onInput={this.handleInput1}
            onChange={this.handleChange1}
            min={this.state.min}
            max={this.state.max}
            disabled={this.state.disabled}
          />
          <p>onInput: {this.state.slider1Input}</p>
          <p>onChange: {this.state.slider1Change}</p>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Discrete Slider
          </Text>
          <Slider
            value={this.state.slider2Change}
            onInput={this.handleInput2}
            onChange={this.handleChange2}
            min={this.state.min}
            max={this.state.max}
            step={this.state.step}
            disabled={this.state.disabled}
            discrete
          />
          <p>onInput: {this.state.slider2Input}</p>
          <p>onChange: {this.state.slider2Change}</p>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Discrete Slider with Tick Marks
          </Text>
          <Slider
            value={this.state.slider3Change}
            onInput={this.handleInput3}
            onChange={this.handleChange3}
            min={this.state.min}
            max={this.state.max}
            step={this.state.step}
            disabled={this.state.disabled}
            discrete
            showMarkers
          />
          <p>onInput: {this.state.slider3Input}</p>
          <p>onChange: {this.state.slider3Change}</p>
        </section>

        <section>
          <Text component="h3" textStyle="title">
            Custom Colored Discrete Slider with Tick Marks
          </Text>
          <Slider
            className="demo-slider--custom"
            value={this.state.slider4Change}
            onInput={this.handleInput4}
            onChange={this.handleChange4}
            min={this.state.min}
            max={this.state.max}
            step={this.state.step}
            disabled={this.state.disabled}
            discrete
            showMarkers
          />
          <p>onInput: {this.state.slider4Input}</p>
          <p>onChange: {this.state.slider4Change}</p>
        </section>

        <section>
          <label>
            Min:
            <input
              type="number"
              value={this.state.min}
              onChange={this.handleChangeMin}
            />
          </label>
          <br />
          <label>
            Max:
            <input
              type="number"
              value={this.state.max}
              onChange={this.handleChangeMax}
            />
          </label>
          <br />
          <label>
            Step:
            <input
              type="number"
              value={this.state.step}
              onChange={this.handleChangeStep}
            />
          </label>
        </section>

        <section>
          <label>
            <input
              type="checkbox"
              value={this.state.disabled}
              onClick={this.handleDisabled}
            />{' '}
            Disabled
          </label>

          <br />

          <label>
            <input type="checkbox" /> Dark Theme
          </label>

          <br />

          <label>
            <input type="checkbox" /> Use Custom BG Color
          </label>

          <br />

          <label>
            <input type="checkbox" /> RTL
          </label>
        </section>
      </LayoutCell>
    );
  }
}
