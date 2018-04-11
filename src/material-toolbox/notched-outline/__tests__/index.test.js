// @flow
import React from 'react';
import { shallow } from 'enzyme';
import NotchedOutline from '../index';

describe('component::NotchedOutline', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<NotchedOutline />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot cssOnly', () => {
    const component = shallow(<NotchedOutline cssOnly />);
    expect(component).toMatchSnapshot();
  });
});
