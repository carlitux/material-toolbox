// @flow
/* eslint-disable */
import * as React from 'react';
import Highlight  from 'react-syntax-highlighter';
import { monokaiSublime as monokai } from 'react-syntax-highlighter/dist/styles/hljs';
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
  language: 'bash', // eslint-disable-line
};

export default Highlighter;
