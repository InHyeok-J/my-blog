import PostList from 'components/Common/PostList'
import React, { FunctionComponent } from 'react'
import { PostListItemType } from 'types/post.types'

type PostListContainerProps = {
  posts: PostListItemType[]
  selectedCategory: string
}
const PostListContainer: FunctionComponent<PostListContainerProps> = ({
  posts,
  selectedCategory,
}) => {
  const filterData = posts.filter(
    ({
      node: {
        frontmatter: { category },
      },
    }: PostListItemType) =>
      selectedCategory !== 'All' ? category === selectedCategory : true,
  )
  return <PostList posts={filterData} className="screen-box" />
}

export default PostListContainer
