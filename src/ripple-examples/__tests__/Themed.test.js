// @flow
import React from 'react';
import { shallow } from 'enzyme';

import ThemedRipple from '../Themed';

describe('example::ThemedRipple', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<ThemedRipple />);
    expect(component).toMatchSnapshot();
  });
});
