import React from 'react';

interface RichTextNode {
  type: string;
  text?: string;
  children?: RichTextNode[];
}

interface Props {
  content: RichTextNode[];
}

const RichTextRenderer: React.FC<Props> = ({ content }) => {
  return (
    <div>
      {content?.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p key={index} className="text-base leading-relaxed">
              {block.children?.map((child, idx) => {
                if (child.type === 'text') {
                  return <span key={idx}>{child.text}</span>;
                }
                return null;
              })}
            </p>
          );
        }

        // Add more cases for 'heading', 'list', 'bold', etc. if needed
        return null;
      })}
    </div>
  );
};

export default RichTextRenderer;
