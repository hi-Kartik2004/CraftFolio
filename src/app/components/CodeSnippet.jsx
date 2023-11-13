"use client";
import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { MdOutlineDownloadDone } from "react-icons/md";

function CodeSnippet({ text, language, wrapLines, showLineNumbers }) {
  // Apply the margin to the pre element
  const [copied, setCopied] = useState(false);

  function copyCode() {
    setCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <pre className="rounded-md bg-primary-foreground border border-1 border-dashed px-4 pb-4 overflow-auto relative max-h-[600px]">
      {copied ? (
        <MdOutlineDownloadDone className="absolute right-2 top-4 bg-muted rounded-sm text-2xl p-1" />
      ) : (
        <BiCopy
          onClick={copyCode}
          className="absolute right-2 top-4 bg-muted rounded-sm text-2xl p-1"
        />
      )}

      <code>{text}</code>
    </pre>
  );
}

export default CodeSnippet;
