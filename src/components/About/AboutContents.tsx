import styled from '@emotion/styled'
import ContactList from 'components/Common/ContactList'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'
import COLORS from 'utils/Colors'
import TagBlock from './TagBlock'

const AboutContentsWrapper = styled.div`
  /* width: 768px; */
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0px 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`
const AboutBlock = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`
const AboutTextBlock = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1023px) {
    padding: 0;
  }
`
const NameBlock = styled.div`
  display: flex;
  align-items: baseline;
`
const Name = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: ${COLORS.grey_semi_dark};
  @media (max-width: 479px) {
    font-size: 32px;
  }
`
const EngName = styled.div`
  font-size: 28px;
  color: ${COLORS.grey_semi_dark};
  @media (max-width: 479px) {
    font-size: 24px;
  }
`
const Role = styled.div`
  font-size: 24px;
  color: ${COLORS.grey_nomarl_dark};
  @media (max-width: 479px) {
    font-size: 20px;
  }
`
const AboutDetail = styled.div`
  padding: 20px 0px;
`
const SubText = styled.div`
  font-size: 18px;
  color: ${COLORS.grey_semi_dark};
  line-height: 30px;
  @media (max-width: 479px) {
    font-size: 14px;
  }
`
const AboutImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.15);
  margin-top: -5vw;
  margin-bottom: 5vw;
`
const AboutImageBlock = styled.div`
  width: 100%;
  @media (max-width: 1023px) {
    width: auto;
    padding-left: max(15vw, 10px);
    padding-right: max(15vw, 10px);
  }
`

const TagListBlock = styled.div`
  display: flex;
`
const ContactListBlock = styled.div`
  padding: 10px 0px;
`
const Intro = styled.div`
  border-left: 3px solid ${COLORS.grey_semi_dark};
  padding-left: 20px;
  margin-bottom: 10px;
`
type AboutContentsProps = {
  profileImage: IGatsbyImageData
}
const AboutContents: FunctionComponent<AboutContentsProps> = ({
  profileImage,
}) => {
  const TagList = ['Nodejs', 'Spring', '3대430']
  return (
    <AboutContentsWrapper>
      <AboutBlock>
        <AboutImageBlock>
          <AboutImage image={profileImage} alt="profile" />
        </AboutImageBlock>
        <AboutTextBlock>
          <NameBlock>
            <Name>조인혁</Name>
            <EngName>Jo In Hyeok</EngName>
          </NameBlock>
          <Role>Back End Engineer</Role>
          <AboutDetail>
            <Intro>
              "안녕하세요! 👋🏻 <br /> 백엔드 개발을 하고 있는 조인혁이라고
              합니다!"
            </Intro>
            <SubText>
              무엇인가 직접 만드는 것을 좋아하며 개발 작품이 돌아가는 것에
              소소한 행복을 느끼고 있습니다. 🌟
            </SubText>
            <SubText>
              내가 만드는 서비스가 다른 사람들의 행복이 됐으면 좋겠습니다.
            </SubText>
            <SubText>운동을 통한 건강과 공부의 균형을 좋아합니다. 🏋️‍♂️</SubText>
          </AboutDetail>
          <TagListBlock>
            {TagList.map((tag, index) => (
              <TagBlock key={index}>{tag}</TagBlock>
            ))}
          </TagListBlock>
          <ContactListBlock>
            <ContactList />
          </ContactListBlock>
        </AboutTextBlock>
      </AboutBlock>
    </AboutContentsWrapper>
  )
}

export default AboutContents
