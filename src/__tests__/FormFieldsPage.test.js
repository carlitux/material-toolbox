// @flow
import React from 'react';
import { shallow } from 'enzyme';

import FormFieldsPage from '../FormFieldsPage';

describe('page::FormFieldsPage', () => {
  it('Should match snapshoot', () => {
    const scrollTo = jest.fn();
    window.scrollTo = scrollTo;
    const component = shallow(<FormFieldsPage />);
    expect(component).toMatchSnapshot();
    expect(scrollTo.mock.calls).toHaveLength(1);
    delete window.scrollTo;
  });
});
