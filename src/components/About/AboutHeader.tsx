import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import COLORS from 'utils/Colors'

const AboutHeaderWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  max-height: 500px;
  display: flex;
  padding-top: max(10vw, 70px);
  padding-bottom: max(10vw, 50px);

  background: linear-gradient(
    120deg,
    ${COLORS.grey_semi_dark},
    ${COLORS.grey_dark}
  );
  flex-direction: column;
`
const Container = styled.div`
  width: 768px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  padding: 0 10px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`
const Title = styled.div`
  width: 140px;
  font-size: 48px;
  font-weight: 500;
  border-bottom: 3px solid ${COLORS.white};
  color: ${COLORS.white};
`
const AboutHeader: FunctionComponent = () => {
  return (
    <AboutHeaderWrapper>
      <Container>
        <Title>About</Title>
      </Container>
    </AboutHeaderWrapper>
  )
}

export default AboutHeader
