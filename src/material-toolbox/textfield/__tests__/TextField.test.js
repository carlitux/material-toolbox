// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TextField from '../TextField';
import TextFieldIcon from '../Icon';

global.MutationObserver = function MutationObserver() {};

describe('component::TextField', () => {
  it('Should match snapshoot', () => {
    const component = shallow(<TextField label="test" />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot cssOnly', () => {
    const component = shallow(<TextField label="test" cssOnly />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot fullWidth', () => {
    const component = shallow(<TextField label="test" fullWidth />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot multiline', () => {
    const component = shallow(<TextField label="test" multiline />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot disabled', () => {
    const component = shallow(<TextField label="test" disabled />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot dense', () => {
    const component = shallow(<TextField label="test" dense />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot outlined', () => {
    const component = shallow(<TextField label="test" outlined />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot box', () => {
    const component = shallow(<TextField label="test" box />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot value', () => {
    const component = shallow(<TextField label="test" value="test" />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot invalid', () => {
    const component = shallow(<TextField label="test" invalid />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot aria-controls', () => {
    const component = shallow(<TextField label="test" aria-controls="test" />);
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot helperText', () => {
    const component = shallow(
      <TextField
        label="test"
        helperText="this is a helper text"
        aria-controls="test"
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot persistentHelperText', () => {
    const component = shallow(
      <TextField
        label="test"
        helperText="this is a helper text"
        persistentHelperText
        aria-controls="test"
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot validationHelperText', () => {
    const component = shallow(
      <TextField
        label="test"
        helperText="this is a helper text"
        validationHelperText
        invalid
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot icon leading', () => {
    const component = shallow(
      <TextField label="test" icon="leading" box>
        <TextFieldIcon className="material-icons">delete</TextFieldIcon>
      </TextField>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Should match snapshoot icon trailing', () => {
    const component = shallow(
      <TextField label="test" icon="trailing" outlined>
        <TextFieldIcon className="material-icons">delete</TextFieldIcon>
      </TextField>,
    );
    expect(component).toMatchSnapshot();
  });
});
