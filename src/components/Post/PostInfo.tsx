import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { FaTag } from 'react-icons/fa'
import COLORS from 'utils/Colors'

const PostHeadInfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 10px 0;
  color: ${COLORS.white};
  @media (max-width: 768px) {
    width: 100%;
    padding: 60px 20px 0;
  }
`

const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  z-index: 1;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`
const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  z-index: 1;
  margin-top: 150px;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 40px;
  font-weight: 600;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`

const PostData = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 20px;
  z-index: 1;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    font-size: 16px;
  }
`

const CategoryItem = styled.div`
  color: ${COLORS.white};
  svg {
    position: relative;
    top: 2px;
    left: -2px;
  }
`
const TagsAndDateBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export type PostHeadInfoProps = {
  title: string
  date: string
  tags: string[]
  category: string
}

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  tags,
  category,
}) {
  const goBackPage = () => window.history.back()
  console.log(title)
  return (
    <PostHeadInfoWrapper>
      <PrevPageIcon onClick={goBackPage}>
        <BsBoxArrowInLeft />
      </PrevPageIcon>
      <Title>{title}</Title>
      <PostData>
        <CategoryItem>
          <FaTag />
          {category}
        </CategoryItem>
        <TagsAndDateBlock>
          <div>{tags.join(' / ')}</div>
          <div>{date}</div>
        </TagsAndDateBlock>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
