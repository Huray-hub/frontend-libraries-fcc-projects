import React, { useState } from "react";
import { useFreeCodeCampTests } from "../util";
import marked from "marked";
import "./MarkdownPreviewer.scss";

const placeholder = `# This is a Markdown previewer!
  
## enter github style markdown 
### And receive html output

\`\`\`
// this is a function:

function square(number) {
  return number * number;
}
\`\`\`
  
**bold** text
_italic_ text
**_both!_**
~~crossed out~~.

[link](https://www.freecodecamp.com)
> Block Quotes!


- \`<ul></ul>\`
  - with bullets.
     - indented.


1. \`<ol></ol>\`
1. once started  
1. use whatever 
- you
* want

embedded images:

![CodePen Logo](https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png)
`;

marked.setOptions({
    breaks: true,
});

const renderMarkdown = new marked.Renderer();

const Editor = (props) => {
    const { markdown, setMarkdown } = props;

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div id="editor-wrapper">
            <h3>Editor</h3>
            <textarea
                id="editor"
                value={markdown}
                onChange={handleChange}
            ></textarea>
        </div>
    );
};

const Preview = (props) => {
    return (
        <div id="preview-wrapper">
            <h3>Preview</h3>
            <div
                id="preview"
                dangerouslySetInnerHTML={{
                    __html: marked(props.markdown, {
                        renderer: renderMarkdown,
                    }),
                }}
            ></div>
        </div>
    );
};

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState(placeholder);

    useFreeCodeCampTests();

    return (
        <div className="markdown-previewer container">
            <h2>Markdown Previewer</h2>
            <div id="wrapper">
                
                <Editor markdown={markdown} setMarkdown={setMarkdown} />
                <Preview markdown={markdown} />
            </div>
        </div>
    );
};

export default MarkdownPreviewer;
