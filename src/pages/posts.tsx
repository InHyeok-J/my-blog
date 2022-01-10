import React, { FunctionComponent, useMemo } from 'react'
import Template from 'components/Common/Template'
import CategoryList from 'components/Posts/CategoryList'
import PostsHeader from 'components/Posts/PostsHeader'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/post.types'
import queryString, { ParsedQuery } from 'query-string'
import PostListContainer from 'components/Posts/PostListContainer'

type PostsPateType = {
  data: {
    allMdx: {
      edges: PostListItemType[]
    }
  }
  location: {
    search: string
  }
}

const PostsPage: FunctionComponent<PostsPateType> = ({
  data: {
    allMdx: { edges },
  },
  location: { search },
}) => {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: string[],
          {
            node: {
              frontmatter: { category },
            },
          }: PostListItemType,
        ) => {
          if (!list.includes(category)) {
            list.push(category)
          }
          return list
        },
        ['All'],
      ),
    [],
  )

  return (
    <Template>
      <PostsHeader selectedCategory={selectedCategory} />
      <CategoryList
        categoryList={categoryList}
        selectedCategory={selectedCategory}
      />
      <PostListContainer posts={edges} selectedCategory={selectedCategory} />
    </Template>
  )
}
export default PostsPage

export const getPosts = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            date
            summary
            tags
            category
            title
            bannerImage {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
          id
          slug
        }
      }
    }
  }
`
