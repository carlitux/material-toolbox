// @flow
import React from 'react';
import { shallow } from 'enzyme';

import CssOnly from '../CssOnly';

describe('example::CssOnly', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<CssOnly />);
    expect(component).toMatchSnapshot();
  });
});
