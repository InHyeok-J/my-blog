import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import { FiHash } from 'react-icons/fi'
import COLORS from 'utils/Colors'

const PostsHeaderWrapper = styled.div`
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
const SubTitle = styled.div`
  font-size: 32px;
  margin-left: 10px;
  margin-top: 10px;
  font-weight: 500;
  color: ${COLORS.grey_semi_dark};
  svg {
    position: relative;
    top: 3px;
    left: 2px;
    font-size: 32px;
  }
  @media (max-width: 768px) {
    margin-left: 0px;
  }
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

type PostHeaderProps = {
  selectedCategory: string
}
const PostsHeader: FunctionComponent<PostHeaderProps> = ({
  selectedCategory,
}) => {
  return (
    <PostsHeaderWrapper>
      <Container>
        <Title>My Posts</Title>
        <SubTitle>
          <FiHash />
          {selectedCategory}
        </SubTitle>
      </Container>
    </PostsHeaderWrapper>
  )
}

export default PostsHeader
