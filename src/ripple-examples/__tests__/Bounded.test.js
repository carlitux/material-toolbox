// @flow
import React from 'react';
import { shallow } from 'enzyme';

import BoundedRipple from '../Bounded';

describe('example::BoundedRipple', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<BoundedRipple />);
    expect(component).toMatchSnapshot();
  });
});
