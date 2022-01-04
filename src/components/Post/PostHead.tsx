import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from './PostInfo'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = PostHeadInfoProps & {
  bannerImage: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: 1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  tags,
  bannerImage,
  category,
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={bannerImage} alt="banerImage" />
      <PostHeadInfo title={title} date={date} tags={tags} category={category} />
    </PostHeadWrapper>
  )
}

export default PostHead
