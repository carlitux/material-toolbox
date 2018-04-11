// @flow
import * as React from 'react';
import Highlight from 'react-syntax-highlighter'; // eslint-disable-line
import { monokaiSublime as monokai } from 'react-syntax-highlighter/styles/hljs'; // eslint-disable-line

type Props = {
  children: string,
  language?: string,
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
