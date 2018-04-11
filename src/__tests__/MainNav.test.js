// @flow
import React from 'react';
import { shallow } from 'enzyme';
import MainNav from '../MainNav';

describe('component::MainNav', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<MainNav />);
    expect(component).toMatchSnapshot();
  });
});
