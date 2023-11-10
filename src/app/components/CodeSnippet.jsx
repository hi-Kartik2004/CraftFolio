import React from "react";

function CodeSnippet({ text, language, wrapLines, showLineNumbers }) {
  // Apply the margin to the pre element

  return (
    <pre className="rounded-md bg-primary-foreground border border-1 border-dashed px-4 py-4">
      <code>{text}</code>
    </pre>
  );
}

export default CodeSnippet;
