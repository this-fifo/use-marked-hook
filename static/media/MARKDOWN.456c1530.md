## useMarked() hook

> A custom react hook of marked and sanitize-html, view the [source](https://github.com/this-fifo/use-marked-hook/blob/master/src/index.js)

**This page content was rendered by React with [useMarked()](https://github.com/this-fifo/use-marked-hook) from a markdown file**

<u>CSS styles from [Bahunya](https://github.com/Kimeiga/bahunya) and syntax highlighting by [Prism](https://prismjs.com/)</u>

### How it works

1. It uses [marked](https://github.com/markedjs/marked/) as the markdown parser
2. And sanitizes the result with [sanitize-html](https://github.com/apostrophecms/sanitize-html)

That's it.

### Sample usage

```jsx
// This is actually the code behind this page, check it out on github
import React, { useEffect, useState } from "react";
import { useMarked } from "use-marked-hook";
import Prism from "prismjs";
import MARKDOWN from "./MARKDOWN.md";

const App = () => {
  const [content, setContent] = useState("");

  const markedOptions = {
    highlight: code =>
      Prism.highlight(code, Prism.languages.javascript, "javascript")
  };
  const html = {
    __html: useMarked(content, { skipSanitize: true, markedOptions })
  };

  const getMarkdown = () => {
    fetch(MARKDOWN)
      .then(res => res.text())
      .then(setContent);
  };

  useEffect(() => {
    getMarkdown();
  }, []);

  return <div dangerouslySetInnerHTML={html} />;
};
export default App;
```

#### Aditional Configuration

You can pass an optional `options` object for configuring useMarked(), this is the default provided

```javascript
{
    skipSanitize: false,
    markedOptions: null,
    sanitizeOptions: {
        allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
            'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
            'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'iframe'],
        disallowedTagsMode: 'discard',
        allowedAttributes: {
            a: ['href', 'name', 'target'],
            img: ['src']
        },
        selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
        allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
        allowedSchemesByTag: {},
        allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
        allowProtocolRelative: true
    }
}
```

Checkout [marked.js](https://marked.js.org/#/README.md) and [sanitize-html](https://github.com/apostrophecms/sanitize-html) docs for how to tweak them to your custom needs

Made with ☕ by [Filipe Herculano](https://github.com/this-fifo)
