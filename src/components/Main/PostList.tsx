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

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  category: 'Web',
  tags: ['react', 'javaScript'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  banner:
    '<https://ji5485.github.io/static/e4f34c558ae8e8235ff53b0311085796/4d854/javascript-core-concept-summary-function-1.webp>',
  link: '<https://www.google.co.kr/>',
}

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  return (
    <Container>
      <Text>Look at recent posts</Text>
      <PostListWrapper>
        {posts.map(post => (
          <PostItem post={post} key={post.node.id} />
        ))}
      </PostListWrapper>
    </Container>
  )
}

export default PostList
