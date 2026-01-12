import React, { useState, useCallback } from 'react';
import { Check, Copy, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner"; // Assuming sonner is used for toasts, or we can use a simpler approach

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
  language = 'csharp',
  showLineNumbers = false,
  showCopyButton = true,
  className = '',
  title,
  maxHeight
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      // toast.success("Code copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // toast.error("Failed to copy code");
    }
  }, [code]);

  return (
    <div className={cn(
      "group relative my-6 rounded-lg border bg-muted/50 overflow-hidden",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between border-b bg-muted/80 px-4 py-2">
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {language}
          </span>
          {title && (
            <span className="ml-2 text-sm font-medium text-foreground">
              {title}
            </span>
          )}
        </div>
        {showCopyButton && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">Copy code</span>
          </Button>
        )}
      </div>

      {/* Code Content */}
      <div
        className="overflow-x-auto p-4 font-mono text-sm leading-relaxed"
        style={{ maxHeight: maxHeight || 'none' }}
      >
        <div className="flex gap-4">
          {showLineNumbers && (
            <div className="flex flex-col text-muted-foreground/40 select-none text-right min-w-[20px]">
              {code.trim().split('\n').map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
          )}
          <pre className="flex-1 whitespace-pre-wrap break-words">
            <code>{code.trim()}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;