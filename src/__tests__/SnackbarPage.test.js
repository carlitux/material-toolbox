// @flow
import React from 'react';
import { shallow } from 'enzyme';
import SnackbarPage from '../SnackbarPage';

describe('page::SnackbarPage', () => {
  it('Should match snapshoot', () => {
    const scrollTo = jest.fn();
    window.scrollTo = scrollTo;
    const component = shallow(<SnackbarPage />);
    expect(component).toMatchSnapshot();
    expect(scrollTo.mock.calls).toHaveLength(1);
    delete window.scrollTo;
  });
});
