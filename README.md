# use-marked-hook

> A react hook for Marked.js

[![NPM](https://img.shields.io/npm/v/use-marked-hook.svg)](https://www.npmjs.com/package/use-marked-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add use-marked-hook
```

## Usage

```jsx
import React, { Component } from "react";

import { useMarked } from "use-marked-hook";

const Example = () => {
  const markdown = `**bold content**`;
  const html = useMarked(markdown); // html -> <p></strong>bold content</strong></p>
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
```

## License

MIT © [Filipe Herculano](https://github.com/this-fifo)

---
