import React from 'react';
import MarkdownItem from 'react-markdown'

interface MarkdownProps {
    markdown: string;

}

const Markdown: React.FC<MarkdownProps> = ({ markdown }) => {
    return (
        <MarkdownItem
            skipHtml={false}
            components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-4" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
                h4: ({ node, ...props }) => <h4 className="text-lg font-bold mt-4 mb-2" {...props} />,
                h5: ({ node, ...props }) => <h5 className="text-md font-bold mt-4 mb-2" {...props} />,
                h6: ({ node, ...props }) => <h6 className="text-sm font-bold mt-4 mb-2" {...props} />,
                p: ({ node, ...props }) => <p className="text-gray-700" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-5 space-y-3" {...props} />,
                b: ({ node, ...props }) => <b className="font-bold" {...props} />,
                i: ({ node, ...props }) => <i className="italic" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                em: ({ node, ...props }) => <em className="italic" {...props} />,
                a: ({ node, ...props }) => <a className="text-blue-500" {...props} />,
            }}
        >{markdown}</MarkdownItem>
    );
};

export default Markdown;

