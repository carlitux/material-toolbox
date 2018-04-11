// @flow
import * as React from 'react';

import Example from '../Example';
import TextField from '../material-toolbox/textfield/TextField';

const source = `import TextField from 'material-toolbox/textfield/TextField';

const PreFilled = () => (
  <TextField defaultValue="Pre-filled value" label="Label floating above" />
);

export default PreFilled;
`;

const PreFilled = () => (
  <Example title="Preventing FOUC" source={source}>
    <TextField defaultValue="Pre-filled value" label="Label floating above" />
  </Example>
);

export default PreFilled;
