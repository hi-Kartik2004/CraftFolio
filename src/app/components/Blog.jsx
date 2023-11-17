import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

function Blog({ code }) {
  return (
    <div>
      <MarkdownRenderer content={code} />
    </div>
  );
}

export default Blog;
