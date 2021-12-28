import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import COLORS from 'utils/Colors'

const FooterWrapper = styled.div`
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  color: ${COLORS.grey_dark};
  .gatsby {
    color: ${COLORS.gatsby_color};
  }
`

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      ©{' '}
      <a href="https://github.com/InHyeok-J" target="_blank" rel="noreferrer">
        InHyeok-J
      </a>{' '}
      Built With{' '}
      <a
        className="gatsby"
        href="https://www.gatsbyjs.com/"
        target="_blank"
        rel="noreferrer"
      >
        Gatsby
      </a>
    </FooterWrapper>
  )
}

export default Footer
