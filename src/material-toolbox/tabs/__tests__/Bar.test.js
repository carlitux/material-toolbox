import React from 'react';
import { shallow } from 'enzyme';
import Bar from '../Bar';
import Tab from '../Tab';

describe('component::Bar', () => {
  it('Should match snapshoot with cssOnly', () => {
    const component = shallow(
      <Bar cssOnly>
        <Tab>Tab 1</Tab>
        <Tab active>Tab 2</Tab>
      </Bar>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot', () => {
    const component = shallow(
      <Bar className="extra-class">
        <Tab>Tab 1</Tab>
        <Tab active>Tab 2</Tab>
      </Bar>,
    );
    expect(component).toMatchSnapshot();
  });
});
