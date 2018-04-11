// @flow
import React from 'react';
import { shallow } from 'enzyme';

import WithJavascript from '../WithJavascript';

describe('example::WithJavascript', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<WithJavascript />);
    expect(component).toMatchSnapshot();
  });
});
