import GlobalStyle from './src/components/Common/GlobalStyle'
import Code from './src/components/Common/CodeBlock'
import { MDXProvider } from '@mdx-js/react'
import Table from './src/components/Common/Table'
const components = {
  table: Table,
  pre: props => <Code {...props} />,
  code: props => <pre style={{ color: 'black' }} {...props} />,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <GlobalStyle />
    {element}
  </MDXProvider>
)
