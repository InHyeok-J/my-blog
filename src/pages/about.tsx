import AboutContents from 'components/About/AboutContents'
import AboutHeader from 'components/About/AboutHeader'
import Template from 'components/Common/Template'
import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { GatsbyImageType } from 'types/post.types'

type AboutPageProps = {
  data: {
    file: GatsbyImageType
  }
}

const AboutPage: FunctionComponent<AboutPageProps> = ({
  data: {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  return (
    <Template>
      <AboutHeader />
      <AboutContents profileImage={gatsbyImageData} />
    </Template>
  )
}
export default AboutPage

export const aboutInfo = graphql`
  query {
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 500, height: 500)
      }
    }
  }
`
