// @flow
import React from 'react';
import { shallow } from 'enzyme';

import UnboundedRipple from '../Unbounded';

describe('example::UnboundedRipple', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<UnboundedRipple />);
    expect(component).toMatchSnapshot();
  });
});
