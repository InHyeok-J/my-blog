import { IGatsbyImageData } from 'gatsby-plugin-image'

export type PostFrontmatterType = {
  date: string
  summary: string
  tags: string[]
  category: string
  title: string
  bannerImage: GatsbyImageType
}

export type GatsbyImageType = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

export type PostListItemType = {
  node: {
    id: string
    slug: string
    frontmatter: PostFrontmatterType
  }
}
