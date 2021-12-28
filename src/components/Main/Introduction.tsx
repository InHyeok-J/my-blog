import styled from '@emotion/styled'
import ContactList from 'components/Common/ContactList'
import React, { FunctionComponent } from 'react'
import ProfileImage from './ProfileImage'

const IntroductionWrapper = styled.div`
  width: 768px;
  height: 500px;
  margin: 0 auto;
  padding-top: 200px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 200px 20px;
  }
`
const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
const SubTitle = styled.p`
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
`
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`

const PROFILE_IMAGE = 'https://avatars.githubusercontent.com/u/28949213?v=4'
const Introduction: FunctionComponent = () => {
  return (
    <IntroductionWrapper>
      <ProfileBlock>
        <ProfileImage src={PROFILE_IMAGE} />
        <TextBlock>
          <Title>안녕하세요! 개발자 조인혁입니다.</Title>
          <SubTitle>
            백엔드 개발자를 희망하고 있으며 개발 작품이 돌아가는 것에 소소한
            행복을 느끼며 살아가고 있습니다.
          </SubTitle>
        </TextBlock>
      </ProfileBlock>
      <ContactList />
    </IntroductionWrapper>
  )
}

export default Introduction
