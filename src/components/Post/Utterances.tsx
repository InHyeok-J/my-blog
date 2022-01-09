import React, {
  createRef,
  FunctionComponent,
  memo,
  useLayoutEffect,
} from 'react'

const src = 'https://utteranc.es/client.js'
const repo = 'Inhyeok-J/my-blog'
type UtterancesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}
const Utterances: FunctionComponent = memo(() => {
  const containerRef = createRef<HTMLDivElement>()

  useLayoutEffect(() => {
    if (containerRef.current === null) return
    const utterances = document.createElement('script')

    const attributes: UtterancesType = {
      src,
      repo,
      theme: 'github-light',
      'issue-term': 'pathname',
      label: 'comments❗️',
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    containerRef.current.appendChild(utterances)
  }, [containerRef])

  return <div ref={containerRef} />
})
export default Utterances
