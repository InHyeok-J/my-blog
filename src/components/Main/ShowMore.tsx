import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import COLORS from 'utils/Colors'

const ShowMoreWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
  }
`
const ShowMoreButton = styled.button`
  border-style: none;
  border-radius: 5px;
  margin-right: 20px;
  padding: 5px 8px;
  font-size: 18px;
  background-color: ${COLORS.grey_light};
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

const ShowMore: FunctionComponent = () => {
  return (
    <ShowMoreWrapper>
      <ShowMoreButton>SHOW MORE</ShowMoreButton>
    </ShowMoreWrapper>
  )
}
export default ShowMore
