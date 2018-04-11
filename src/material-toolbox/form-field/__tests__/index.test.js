// @flow
import React from 'react';
import { shallow } from 'enzyme';

import FormField from '../index';

describe('component::Ripple', () => {
  it('Should match snapshoot', () => {
    const component = shallow(
      <FormField label="Should render label">
        <input type="button" />
      </FormField>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot cssOnly', () => {
    const component = shallow(
      <FormField label="Should render label" cssOnly>
        <input type="button" />
      </FormField>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot alignEnd', () => {
    const component = shallow(
      <FormField label="Should render label" alignEnd>
        <input type="button" />
      </FormField>,
    );
    expect(component).toMatchSnapshot();
  });
});
