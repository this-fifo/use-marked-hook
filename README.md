# useMarked() hook

> A react hook for parsing markdown with marked and sanitize-html

[![NPM](https://img.shields.io/npm/v/use-marked-hook.svg)](https://www.npmjs.com/package/use-marked-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Live Demo

The app located at `/example` demonstrates how it could be used, see the live result at [https://this-fifo.github.io/use-marked-hook/](https://this-fifo.github.io/use-marked-hook/)

## Install

```bash
yarn add use-marked-hook
```

## Usage

```jsx
import React from "react";
import { useMarked } from "use-marked-hook";

const App = () => {
  const markdown = `**bold content**`;
  const html = useMarked(markdown);
  // html -> <p></strong>bold content</strong></p>
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
```

## License

MIT © [Filipe Herculano](https://github.com/this-fifo)

---
