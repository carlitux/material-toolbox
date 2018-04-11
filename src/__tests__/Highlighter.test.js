import React from 'react';
import { shallow } from 'enzyme';
import Highlighter from '../Highlighter';

describe('component::Highlighter', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<Highlighter />);
    expect(component).toMatchSnapshot();
  });
});
