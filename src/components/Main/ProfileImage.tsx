import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const ProfileImageWrapper = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
type ProfileImageProps = {
  src: string
}
const ProfileImage: FunctionComponent<ProfileImageProps> = ({ src }) => {
  return <ProfileImageWrapper src={src} alt="ProfileImage" />
}
export default ProfileImage
