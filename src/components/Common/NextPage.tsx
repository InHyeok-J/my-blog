import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { PrevNextTypes } from 'types/post.types'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import COLORS from 'utils/Colors'

const NextPageWrapper = styled.div`
  width: 768px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(245, 245, 245);

  box-shadow: 5px 0 2px -4px rgb(0 0 0 / 10%), -5px 0 2px -4px rgb(0 0 0 / 10%);
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
  }
`
const BlockContainer = styled.div`
  width: 45%;
  text-align: center;
  .left-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .right-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  @media (max-width: 768px) {
    width: 47%;
  }
`
const Title = styled.div`
  padding-top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  margin-top: 1px;
  max-height: 40px;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  @media (max-width: 768px) {
    max-height: 30px;
  }
`
const LinkWrapper = styled(Link)`
  height: 100px;
  font-size: 24px;
  color: ${COLORS.grey_semi_dark};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  padding: 10px;
  svg {
    font-size: 24px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
    transform: scale(1.02); /*  default */
    -webkit-transform: scale(1.02); /*  크롬 */
    font-weight: 500;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    height: 80px;

    svg {
      font-size: 18px;
    }
  }
`

type NextPageTypes = {
  context: {
    prev: null | PrevNextTypes
    next: null | PrevNextTypes
  }
}

const NextPage: FunctionComponent<NextPageTypes> = ({
  context: { prev, next },
}) => {
  return (
    <NextPageWrapper>
      <BlockContainer>
        {prev && (
          <LinkWrapper to={`/post/${prev.slug}`} className="left-block">
            <AiOutlineArrowLeft />
            <Title>{prev.frontmatter.title}</Title>
          </LinkWrapper>
        )}
      </BlockContainer>

      <BlockContainer>
        {next && (
          <LinkWrapper to={`/post/${next.slug}`} className="right-block">
            <AiOutlineArrowRight />
            <Title>{next.frontmatter.title}</Title>
          </LinkWrapper>
        )}
      </BlockContainer>
    </NextPageWrapper>
  )
}

export default NextPage
