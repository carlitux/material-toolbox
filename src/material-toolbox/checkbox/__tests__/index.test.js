// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';

import Checkbox from '../index';

describe('component::BoundedRipple', () => {
  it('Should match snapshoot cssOnly', () => {
    const component = shallow(<Checkbox cssOnly />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot', () => {
    const component = shallow(<Checkbox />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot indeterminate', () => {
    const component = mount(<Checkbox indeterminate />);
    expect(component).toMatchSnapshot();
  });
});
