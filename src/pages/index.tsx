import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction'
import COLORS from 'utils/Colors'
import { graphql } from 'gatsby'
import PostList from 'components/Main/PostList'
import ShowMore from 'components/Main/ShowMore'
import { GatsbyImageType, PostListItemType } from '../types/post.types'
import Template from 'components/Common/Template'

type IndexPageProps = {
  data: {
    file: GatsbyImageType
    allMdx: {
      edges: PostListItemType[]
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = ({
  data: {
    file: {
      childImageSharp: { gatsbyImageData },
    },
    allMdx: { edges },
  },
}) => {
  return (
    <Template>
      <Introduction profileImage={gatsbyImageData} />
      <PostList posts={edges} />
      <ShowMore />
    </Template>
  )
}

export default IndexPage

export const getMyInfo = graphql`
  query {
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 4) {
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
