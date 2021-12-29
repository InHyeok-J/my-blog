import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai'
import COLORS from 'utils/Colors'

const ContactListWrapper = styled.div`
  width: 100%;
  height: auto;
  svg {
    padding-left: 10px;
    font-size: 45px;
    color: ${COLORS.grey_semi_dark};
  }
  svg:hover {
    cursor: pointer;
    color: ${COLORS.black};
  }
`

const ContactList: FunctionComponent = () => {
  return (
    <ContactListWrapper>
      <a href="https://github.com/InHyeok-J" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a
        href="https://www.instagram.com/inhyeok_j/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram />
      </a>
      <a href="mailto:ss112d86@gmail.com" target="_blank" rel="noreferrer">
        <AiFillMail />
      </a>
    </ContactListWrapper>
  )
}

export default ContactList
