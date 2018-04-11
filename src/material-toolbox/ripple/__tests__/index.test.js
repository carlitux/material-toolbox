// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';

import Ripple from '../index';

describe('component::Ripple', () => {
  it('Should match snapshoot', () => {
    const component = mount(
      <Ripple>
        <div>Ripple</div>
      </Ripple>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot cssOnly', () => {
    const component = shallow(
      <Ripple cssOnly>
        <div>Ripple</div>
      </Ripple>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot primary', () => {
    const component = mount(
      <Ripple primary>
        <div>Ripple</div>
      </Ripple>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot accent', () => {
    const component = mount(
      <Ripple accent>
        <div>Ripple</div>
      </Ripple>,
    );
    expect(component).toMatchSnapshot();
  });
});
