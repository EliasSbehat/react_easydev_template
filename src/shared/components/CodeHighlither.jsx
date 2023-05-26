import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';

const CodeHighlither = ({ children }) => (
  <SyntaxHighlighter showLineNumbers language="jsx" style={darcula}>
    {children}
  </SyntaxHighlighter>
);

export default CodeHighlither;

CodeHighlither.propTypes = {
  children: PropTypes.node.isRequired,
};
