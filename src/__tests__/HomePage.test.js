import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../HomePage';

describe('component::HomePage', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<HomePage />);
    expect(component).toMatchSnapshot();
  });
});
