// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Example from '../Example';

describe('component::Example', () => {
  it('Should match snapshoot', () => {
    const component = shallow(
      <Example title="Example title" source="source code">
        source code
      </Example>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot scss', () => {
    const component = shallow(
      <Example title="Example title" source="source code" scss="scss code">
        source code
      </Example>,
    );
    expect(component).toMatchSnapshot();
  });
});
