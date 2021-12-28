import GlobalStyle from './src/components/Common/GlobalStyle'

export const wrapRootElement = ({ element }) => (
  <div>
    <GlobalStyle />
    {element}
  </div>
)
