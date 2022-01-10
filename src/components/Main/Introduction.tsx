import styled from '@emotion/styled'
import ContactList from 'components/Common/ContactList'
import React, { FunctionComponent } from 'react'
import COLORS from 'utils/Colors'
import ProfileImage from './ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

const IntroductionWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 100px 10px 0;
  @media (max-width: 768px) {
    width: 100%;
    padding: 100px 20px 0 20px;
  }
`
const Title = styled.h1`
  color: ${COLORS.grey_dark};
  font-size: 34px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
const SubTitle = styled.p`
  line-height: 30px;
  color: ${COLORS.grey_semi_dark};
  font-size: 21px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
`
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`

const Line = styled.span`
  width: 150px;
  border-bottom: 2px solid ${COLORS.grey_semi_dark};
  margin: 10px 0;
`

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  return (
    <IntroductionWrapper>
      <ProfileBlock>
        <ProfileImage profileImage={profileImage} />
        <TextBlock>
          <Title>Hey! I'm InHyeok</Title>
          <Line />
          <SubTitle>
            I am back-end Engineer I am studying node.js and Spring.
          </SubTitle>
        </TextBlock>
      </ProfileBlock>
      <ContactList />
    </IntroductionWrapper>
  )
}

export default Introduction
