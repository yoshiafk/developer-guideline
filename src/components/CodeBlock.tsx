import React from 'react';
import CodeSnippet from './CodeSnippet';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language, className = '' }) => {
  const code = typeof children === 'string' ? children : '';

  return (
    <CodeSnippet
      code={code}
      language={language || 'javascript'}
      className={className}
    />
  );
};

export default CodeBlock;