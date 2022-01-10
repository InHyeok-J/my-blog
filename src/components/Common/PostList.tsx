import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import COLORS from 'utils/Colors'
import { PostListItemType } from 'types/post.types'

const Container = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 20px;
  }
`

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 10px 0 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${COLORS.grey_semi_dark};
`

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  const main = window.location.pathname === '/' ? true : false
  return (
    <Container>
      {main && <Text> Look at recent posts</Text>}
      <PostListWrapper>
        {posts.map(post => (
          <PostItem post={post} key={post.node.id} />
        ))}
      </PostListWrapper>
    </Container>
  )
}

export default PostList
