import Template from 'components/Common/Template'
import PostContent from 'components/Post/PostContext'
import PostHead from 'components/Post/PostHead'
import TableOfContents, { ItemType } from 'components/Post/TableOfContents'
import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { PostFrontmatterType } from 'types/post.types'

type PostTemplateProps = {
  data: {
    mdx: {
      body: any
      frontmatter: PostFrontmatterType
      id: string
      slug: string
      tableOfContents: {
        items: ItemType[]
      }
    }
  }
  pageContext: {
    slug: string
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  data: {
    mdx: {
      frontmatter: {
        title,
        category,
        tags,
        bannerImage: {
          childImageSharp: { gatsbyImageData },
        },
        date,
        summary,
      },
      id,
      slug,
      body,
      tableOfContents,
    },
  },
  pageContext,
}) => {
  return (
    <Template>
      {tableOfContents && <TableOfContents contents={tableOfContents} />}
      <PostHead
        title={title}
        date={date}
        tags={tags}
        category={category}
        bannerImage={gatsbyImageData}
      />
      <PostContent body={body} />
    </Template>
  )
}

export default PostTemplate

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
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
      tableOfContents(maxDepth: 3)
      id
      slug
    }
  }
`
