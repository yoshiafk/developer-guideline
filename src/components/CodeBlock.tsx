import React, { useState } from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      const text = typeof children === 'string' ? children : '';
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`code-block-container ${className}`} style={{ position: 'relative' }}>
      <pre>
        <code className={language ? `language-${language}` : ''}>
          {children}
        </code>
      </pre>
      <button
        className={`copy-button ${copied ? 'copied' : ''}`}
        onClick={copyToClipboard}
        title="Copy to clipboard"
        aria-label="Copy code to clipboard"
      >
        <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`} aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default CodeBlock;