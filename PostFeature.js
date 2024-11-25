// PostFeature.js
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

require('codemirror/mode/javascript/javascript');

const PostFeature = () => {
    const [content, setContent] = useState(''); 

    return (
        <div style={{ padding: '20px' }}>
            <h2>Post Your Question</h2>
            <CodeMirror
                value={content}
                options={{
                    mode: 'javascript',
                    theme: 'material',
                    lineNumbers: true,
                }}
                onBeforeChange={(editor, data, value) => {
                    setContent(value);
                }}
            />
            <h3>Preview:</h3>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default PostFeature;
