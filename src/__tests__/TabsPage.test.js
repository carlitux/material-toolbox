// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TabsPage from '../TabsPage';

describe('page::TabsPage', () => {
  it('Should match snapshoot', () => {
    const scrollTo = jest.fn();
    window.scrollTo = scrollTo;
    const component = shallow(<TabsPage />);
    expect(component).toMatchSnapshot();
    expect(scrollTo.mock.calls).toHaveLength(1);
    delete window.scrollTo;
  });
});
