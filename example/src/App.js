import React, { useEffect, useState } from 'react'
import { useMarked } from 'use-marked-hook'
import Prism from 'prismjs'
import MARKDOWN from './MARKDOWN.md'

const App = () => {
  const [content, setContent] = useState('')

  const markedOptions = {
    highlight: code =>
      Prism.highlight(code, Prism.languages.javascript, 'javascript')
  }
  const html = { __html: useMarked(content, { skipSanitize: true, markedOptions }) }

  const getMarkdown = () => {
    // eslint-disable-next-line no-undef
    fetch(MARKDOWN)
      .then(res => res.text())
      .then(setContent)
  }

  useEffect(() => {
    getMarkdown()
  }, [])

  return <div dangerouslySetInnerHTML={html} />
}
export default App
