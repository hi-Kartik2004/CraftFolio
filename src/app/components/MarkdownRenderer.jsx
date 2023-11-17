import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      className="markdown"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
