// @flow
import React from 'react';
import { shallow } from 'enzyme';
import ValidationPassword from '../ValidationPassword';

describe('example::ValidationPassword', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<ValidationPassword />);
    expect(component).toMatchSnapshot();
  });
});
