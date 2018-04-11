// @flow
import React from 'react';
import { shallow } from 'enzyme';
import WithIcons from '../WithIcons';

describe('example::WithIcons', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<WithIcons />);
    expect(component).toMatchSnapshot();
  });
});
