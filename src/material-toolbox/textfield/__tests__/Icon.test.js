// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TextFieldIcon from '../Icon';

describe('component::TextFieldIcon', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<TextFieldIcon />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot cssOnly', () => {
    const component = shallow(<TextFieldIcon cssOnly />);
    expect(component).toMatchSnapshot();
  });
});
