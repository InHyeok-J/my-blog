import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import COLORS from 'utils/Colors'
import Navbar from 'components/Navbar/Navbar'
import Footer from './Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  background-color: ${COLORS.white};
`
type TemplateProps = {
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <Container className="screen-box">
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
