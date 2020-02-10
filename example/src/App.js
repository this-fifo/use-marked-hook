import React, { useEffect, useState } from 'react'
import { useMarked } from 'use-marked-hook'
import Prism from 'prismjs'
import demo from './demo.md'

const markedOptions = {
  highlight: (code) => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript')
  }
}

const App = () => {
  const [content, setContent] = useState('')
  const html = { __html: useMarked(content, { skipSanitize: true, markedOptions }) }
  const getMarkdown = () => {
    // eslint-disable-next-line no-undef
    fetch(demo)
      .then(res => res.text())
      .then(setContent)
  }
  useEffect(() => {
    getMarkdown()
  }, [])
  return content ? <div dangerouslySetInnerHTML={html} /> : <></>
}
export default App
