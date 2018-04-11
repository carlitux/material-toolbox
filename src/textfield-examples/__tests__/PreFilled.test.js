// @flow
import React from 'react';
import { shallow } from 'enzyme';
import PreFilled from '../PreFilled';

describe('example::PreFilled', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<PreFilled />);
    expect(component).toMatchSnapshot();
  });
});
