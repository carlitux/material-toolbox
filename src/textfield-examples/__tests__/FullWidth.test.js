// @flow
import React from 'react';
import { shallow } from 'enzyme';
import FullWidth from '../FullWidth';

describe('example::FullWidth', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<FullWidth />);
    expect(component).toMatchSnapshot();
  });
});
