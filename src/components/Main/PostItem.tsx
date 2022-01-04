import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'
import { FaTag } from 'react-icons/fa'
import { FiHash } from 'react-icons/fi'
import { PostListItemType } from 'types/post.types'
import COLORS from 'utils/Colors'

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`
const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`
const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
  svg {
    position: relative;
    top: 2px;
  }
`

const TagItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: ${COLORS.grey_semi_dark};
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.white};
`
const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: ${COLORS.grey_dark};
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.white};
`
const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`
type PostItemProps = {
  post: PostListItemType
}
const PostItem: FunctionComponent<PostItemProps> = ({
  post: {
    node: {
      frontmatter: {
        title,
        date,
        summary,
        tags,
        category,
        bannerImage: {
          childImageSharp: { gatsbyImageData },
        },
      },
      id,
      slug,
    },
  },
}) => {
  return (
    <PostItemWrapper to={slug}>
      <ThumbnailImage image={gatsbyImageData} alt="Post" />
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Tags>
          <CategoryItem>
            <FiHash />
            {category}
          </CategoryItem>
          {tags.map(tag => (
            <TagItem key={tag}>
              <FaTag /> {tag}
            </TagItem>
          ))}
        </Tags>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}
export default PostItem
