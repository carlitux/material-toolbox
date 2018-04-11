import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('component::App', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
