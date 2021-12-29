import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'
import COLORS from 'utils/Colors'
import { graphql } from 'gatsby'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'
import ShowMore from 'components/Main/ShowMore'
import Navbar from 'components/Navbar/Navbar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: ${COLORS.white};
`
type IndexPageProps = {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const CATEGORY_LIST = ['All', 'WEB', 'JavaScript']
const IndexPage: FunctionComponent<IndexPageProps> = ({
  data: {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  return (
    <Container>
      <Navbar />
      <Introduction profileImage={gatsbyImageData} />
      <PostList />
      <ShowMore />
      <Footer />
    </Container>
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
  }
`
