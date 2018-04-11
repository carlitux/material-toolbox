import React from 'react';
import { shallow } from 'enzyme';
import ThemedLink from '../ThemedLink';

describe('component::ThemedLink', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<ThemedLink />);
    expect(component).toMatchSnapshot();
  });
});
