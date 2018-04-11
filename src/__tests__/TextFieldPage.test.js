// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TextFieldPage from '../TextFieldPage';

describe('page::TextFieldPage', () => {
  it('Should match snapshoot', () => {
    const scrollTo = jest.fn();
    window.scrollTo = scrollTo;
    const component = shallow(<TextFieldPage />);
    expect(component).toMatchSnapshot();
    expect(scrollTo.mock.calls).toHaveLength(1);
    delete window.scrollTo;
  });
});
