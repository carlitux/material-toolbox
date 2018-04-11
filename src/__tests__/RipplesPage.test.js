// @flow
import React from 'react';
import { shallow } from 'enzyme';

import RipplesPage from '../RipplesPage';

describe('page::RipplesPage', () => {
  it('Should match snapshoot', () => {
    const scrollTo = jest.fn();
    window.scrollTo = scrollTo;
    const component = shallow(<RipplesPage />);
    expect(component).toMatchSnapshot();
    expect(scrollTo.mock.calls).toHaveLength(1);
    delete window.scrollTo;
  });
});
