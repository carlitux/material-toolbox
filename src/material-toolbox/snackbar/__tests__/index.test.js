import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from '../index';

describe('component::Snackbar', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<Snackbar message="Snackbar test" />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot multiline', () => {
    const component = shallow(<Snackbar message="Snackbar test" multiline />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot actionOnBottom', () => {
    const component = shallow(
      <Snackbar message="Snackbar test" multiline actionOnBottom />,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot align', () => {
    const component = shallow(<Snackbar message="Snackbar test" align />);
    expect(component).toMatchSnapshot();
  });
});
