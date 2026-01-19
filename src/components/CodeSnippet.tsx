import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Check, Copy, Code, Terminal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // Modern dark theme

interface CodeSnippetProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  className?: string;
  title?: string;
  maxHeight?: string | number;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language = 'javascript',
  showLineNumbers = false,
  showCopyButton = true,
  className = '',
  title,
  maxHeight
}) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  }, [code]);

  return (
    <div className={cn(
      "group relative my-6 rounded-xl border border-border bg-[#0d1117] shadow-sm overflow-hidden",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-md bg-white/10 p-1">
            <Terminal className="h-3.5 w-3.5 text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none">
              {language}
            </span>
            {title && (
              <span className="text-xs font-medium text-slate-200 mt-0.5">
                {title}
              </span>
            )}
          </div>
        </div>

        {showCopyButton && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            onClick={copyToClipboard}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Check className="h-4 w-4 text-emerald-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Copy className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="sr-only">Copy code</span>
          </Button>
        )}
      </div>

      {/* Code Content */}
      <div
        className="overflow-x-auto font-mono text-sm leading-relaxed custom-scrollbar"
        style={{ maxHeight: maxHeight || 'none' }}
      >
        <div className="flex p-4">
          {showLineNumbers && (
            <div className="flex flex-col text-slate-600 select-none text-right pr-4 min-w-[32px] border-r border-white/5 mr-4 font-mono text-xs">
              {code.trim().split('\n').map((_, i) => (
                <span key={i} className="leading-relaxed">{i + 1}</span>
              ))}
            </div>
          )}
          <pre className="flex-1 whitespace-pre-wrap break-words">
            <code
              ref={codeRef}
              className={cn(
                "block custom-hljs",
                language ? `language-${language}` : ''
              )}
            >
              {code.trim()}
            </code>
          </pre>
        </div>
      </div>

      {/* Subtle bottom gradient/shimmer on hover */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default CodeSnippet;