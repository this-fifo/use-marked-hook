import { useState, useEffect } from 'react';
import sanitizeHTML from 'sanitize-html';
import marked from 'marked';

import defaultOptions from './defaultOptions'

export const useMarked = (markdown, options = defaultOptions) => {
  const [html, setHtml] = useState(markdown)

  useEffect(() => {
    if (options.markedOptions) {
      marked.setOptions(options.markedOptions)
    }
    const tokens = marked.lexer(markdown)
    const html = marked.parser(tokens)
    setHtml(options.skipSanitize ? html : sanitizeHTML(html, options.sanitizeOptions))
  }, [markdown])

  return html
}