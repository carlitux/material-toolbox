// @flow
import React from 'react';
import { shallow } from 'enzyme';
import LineRipple from '../index';

describe('component::LineRipple', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<LineRipple />);
    expect(component).toMatchSnapshot();
  });
});
