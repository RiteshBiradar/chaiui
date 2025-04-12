"use client";

import { useState } from "react";
import { Copy, Eye, Code2 } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ComponentPreview({ code, children }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const baseButton =
    "inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-muted",
    icon: "p-2",
  };
  const getButtonClass = (variant) =>
    `${baseButton} ${variants[variant] || ""}`;

  return (
    <div className="border overflow-hidden  rounded-xl bg-muted/30 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-black dark:text-white">
          <button
            className={getButtonClass(!showCode ? "default" : "outline")}
            onClick={() => setShowCode(false)}>
            <Eye className="w-4 h-4 mr-1 dark:text-white text-black" />
            <span className="text-black dark:text-white"> Preview</span>
          </button>
          <button
            className={getButtonClass(showCode ? "default" : "outline")}
            onClick={() => setShowCode(true)}>
            <Code2 className="w-4 h-4 mr-1" />
            Code
          </button>
        </div>

        {showCode && (
          <button
            className={getButtonClass("ghost") + " flex items-center"}
            onClick={handleCopy}>
            <Copy className="w-4 h-4" />
            <span className="sr-only">Copy code</span>
            {copied && (
              <span className="ml-2 text-sm text-green-600">Copied!</span>
            )}
          </button>
        )}
      </div>

      {showCode ? (
        <pre className="bg-muted p-4 rounded-lg overflow-auto text-sm mt-1">
          <code>
            <SyntaxHighlighter language="jsx" style={oneDark}>
              {code}
            </SyntaxHighlighter>
          </code>
        </pre>
      ) : (
        <div className="mt-4">{children}</div>
      )}
    </div>
  );
}
