// @flow
import React from 'react';
import { shallow } from 'enzyme';
import DefaultTextField from '../DefaultTextfield';

describe('example::DefaultTextField', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<DefaultTextField />);
    expect(component).toMatchSnapshot();
  });
});
