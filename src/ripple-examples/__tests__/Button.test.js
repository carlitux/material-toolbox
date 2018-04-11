// @flow
import React from 'react';
import { shallow } from 'enzyme';

import ButtonRipple from '../Button';

describe('example::ButtonRipple', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<ButtonRipple />);
    expect(component).toMatchSnapshot();
  });
});
