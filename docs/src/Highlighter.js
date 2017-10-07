// @flow
/* eslint-disable */
import * as React from 'react';
import Highlight  from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles';
/* eslint-enable */

type Props = {
  children: string,
  language: string,
};

const Highlighter = ({ children, language }: Props) => (
  <Highlight showLineNumbers language={language} style={monokai}>
    {children}
  </Highlight>
);

Highlighter.defaultProps = {
  language: 'bash',
};

export default Highlighter;
