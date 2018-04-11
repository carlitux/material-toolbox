import React from 'react';
import { shallow } from 'enzyme';
import Content from '../Content';

describe('component::Content', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<Content />);
    expect(component).toMatchSnapshot();
  });
});
