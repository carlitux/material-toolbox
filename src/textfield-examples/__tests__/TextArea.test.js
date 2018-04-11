// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TextArea from '../TextArea';

describe('example::TextArea', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<TextArea />);
    expect(component).toMatchSnapshot();
  });
});
