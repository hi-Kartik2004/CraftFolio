"use client";
import React from "react";
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

export default function Editor() {
  const [value, setValue] = React.useState(`<!-- Write your Blog here -->`);
  return (
    <div className="container my-10">
      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        className="min-h-screen"
      />
    </div>
  );
}