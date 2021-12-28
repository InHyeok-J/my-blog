import GlobalStyle from './src/components/Common/GlobalStyle'

export const wrapRoomElement = ({ element }) => (
  <div>
    <GlobalStyle />
    {element}
  </div>
)
