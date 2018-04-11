// @flow
import React from 'react';
import { shallow } from 'enzyme';
import HelperText from '../HelperText';

describe('component::HelperText', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<HelperText text="test" />);
    expect(component).toMatchSnapshot();
  });
});
