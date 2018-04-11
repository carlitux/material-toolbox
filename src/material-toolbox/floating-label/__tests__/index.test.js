// @flow
import React from 'react';
import { shallow } from 'enzyme';
import FloatingLabel from '../index';

describe('component::FloatingLabel', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<FloatingLabel label="test" />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot cssOnly', () => {
    const component = shallow(<FloatingLabel label="test" cssOnly />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot with preFilled', () => {
    const component = shallow(<FloatingLabel label="test" preFilled />);
    expect(component).toMatchSnapshot();
  });
});
