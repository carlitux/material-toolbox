import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../Tab';

describe('component::Tab', () => {
  it('Should match snapshoot with cssOnly', () => {
    const component = shallow(<Tab cssOnly_>This is a Tab</Tab>);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot', () => {
    const component = shallow(<Tab className="extra-class">This is a Tab</Tab>);
    expect(component).toMatchSnapshot();
  });

  it('Should call onClick when clicked', () => {
    const onClick = jest.fn();
    const component = shallow(<Tab onClick={onClick}>This is a Tab</Tab>);
    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should call onKeyDown when clicked', () => {
    const onKeyDown = jest.fn();
    const component = shallow(<Tab onKeyDown={onKeyDown}>This is a Tab</Tab>);
    component.simulate('keydown', { key: 'a' });
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });
});
