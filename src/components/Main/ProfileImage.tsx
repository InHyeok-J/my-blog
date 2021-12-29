import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'

const ProfileImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const ProfileImageTag = styled(GatsbyImage)`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 50%;
`

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}
const ProfileImage: FunctionComponent<ProfileImageProps> = ({
  profileImage,
}) => {
  return (
    <ProfileImageWrapper>
      <ProfileImageTag image={profileImage} alt="ProfileImage" />
    </ProfileImageWrapper>
  )
}
export default ProfileImage
