import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'
import COLORS from 'utils/Colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: ${COLORS.white};
`
const IndexPage: FunctionComponent = () => {
  return (
    <Container>
      <Introduction />
      <Footer />
    </Container>
  )
}

export default IndexPage
