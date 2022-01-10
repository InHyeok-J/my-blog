import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import COLORS from 'utils/Colors'

const SeriesHeaderWrapper = styled.div`
  width: 768px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  padding: 50px 10px 0px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 20px 0px;
  }
`

const Title = styled.div`
  font-size: 48px;
  font-weight: 500;
  color: ${COLORS.grey_semi_dark};
`
const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const SeriesHeader: FunctionComponent = () => {
  return (
    <SeriesHeaderWrapper>
      <Container>
        <Title>Series</Title>
      </Container>
    </SeriesHeaderWrapper>
  )
}
export default SeriesHeader
