// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Elevation from '../index';

describe('component::Elevation', () => {
  for (let i = 1; i <= 24; i += 1) {
    it(`Should match snapshoot elevation-${i}`, () => {
      const component = shallow(
        <Elevation depth={i}>
          <div className="test" />
        </Elevation>,
      );
      expect(component).toMatchSnapshot();
    });
  }

  it(`Should match snapshoot transition with elevation 1`, () => {
    const component = shallow(
      <Elevation depth={1} transition>
        <div className="test" />
      </Elevation>,
    );
    expect(component).toMatchSnapshot();
  });
});
