// @flow
import * as React from 'react';

import Example from '../Example';
import TextField from '../material-toolbox/textfield/TextField';

const source = `import TextField from 'material-toolbox/textfield/TextField';

export default class ValidationPassword extends React.Component {
  state = {
    hasError: false,
    password: '',
  };

  handleChange = (evt) => {
    const { value } = evt.currentTarget;
    this.setState({
      password: value,
      hasError: value.length < 8,
    });
  };

  render() {
    return (
      <TextField
        type="password"
        label="Choose password"
        value={this.state.password}
        invalid={this.state.hasError}
        onChange={this.handleChange}
        helperText="Must be at least 8 characters long"
        validationHelperText={this.state.hasError}
        persistentHelperText
        required
      />
    );
  }
}
`;

type Props = {};
type State = {
  hasError: boolean,
  password: string,
};

export default class ValidationPassword extends React.Component<Props, State> {
  state = {
    hasError: false,
    password: '',
  };

  handleChange = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    this.setState({
      password: value,
      hasError: value.length < 8,
    });
  };

  render() {
    return (
      <div>
        <Example title="Password field with validation" source={source}>
          <TextField
            type="password"
            label="Choose password"
            value={this.state.password}
            invalid={this.state.hasError}
            helperText="Must be at least 8 characters long"
            onChange={this.handleChange}
            validationHelperText={this.state.hasError}
            persistentHelperText
            required
          />
        </Example>
      </div>
    );
  }
}
