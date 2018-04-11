// @flow
import React from 'react';
import { shallow } from 'enzyme';
import BoxedTextField from '../Boxed';

describe('example::BoxedTextField', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<BoxedTextField />);
    expect(component).toMatchSnapshot();
  });
});
