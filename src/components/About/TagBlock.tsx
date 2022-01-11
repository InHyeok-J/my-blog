import styled from '@emotion/styled'
import React, { FunctionComponent, ReactNode } from 'react'
import COLORS from 'utils/Colors'

const TagBlockWrapper = styled.div`
  width: 80px;
  font-size: 18px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: ${COLORS.grey_semi_dark};
  margin-right: 5px;
  @media (max-width: 479px) {
    width: 60px;
    font-size: 14px;
    padding: 3px;
  }
`

type TagBlockProps = {
  children: ReactNode
}

const TagBlock: FunctionComponent<TagBlockProps> = ({ children }) => {
  return <TagBlockWrapper>{children}</TagBlockWrapper>
}

export default TagBlock
