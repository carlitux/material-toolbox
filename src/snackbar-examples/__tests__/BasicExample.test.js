// @flow
import React from 'react';
import { shallow } from 'enzyme';

import BasicExample from '../BasicExample';

describe('example::BasicExample', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<BasicExample />);
    expect(component).toMatchSnapshot();
  });
});
