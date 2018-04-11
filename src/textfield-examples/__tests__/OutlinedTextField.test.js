// @flow
import React from 'react';
import { shallow } from 'enzyme';
import OutlinedTextField from '../OutlinedTextField';

describe('example::OutlinedTextField', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<OutlinedTextField />);
    expect(component).toMatchSnapshot();
  });
});
