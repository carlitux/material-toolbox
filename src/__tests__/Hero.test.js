import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../Hero';

describe('component::Hero', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<Hero />);
    expect(component).toMatchSnapshot();
  });
});
