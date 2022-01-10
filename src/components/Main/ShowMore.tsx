import styled from '@emotion/styled'
import { Link } from 'gatsby'
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
const ShowMoreButton = styled(Link)`
  border-style: none;
  border-radius: 5px;
  margin-right: 20px;
  padding: 5px 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.grey_semi_dark};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

  background-color: ${COLORS.white};
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
`

const ShowMore: FunctionComponent = () => {
  return (
    <ShowMoreWrapper>
      <ShowMoreButton to={'/posts'}>SHOW MORE</ShowMoreButton>
    </ShowMoreWrapper>
  )
}
export default ShowMore
