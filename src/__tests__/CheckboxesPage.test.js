// @flow
import React from 'react';
import { shallow } from 'enzyme';

import CheckboxesPage from '../CheckboxesPage';

describe('page::CheckboxesPage', () => {
  it('Should match snapshoot', () => {
    const scrollTo = jest.fn();
    window.scrollTo = scrollTo;
    const component = shallow(<CheckboxesPage />);
    expect(component).toMatchSnapshot();
    expect(scrollTo.mock.calls).toHaveLength(1);
    delete window.scrollTo;
  });
});
