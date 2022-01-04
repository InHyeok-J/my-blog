import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { FunctionComponent, ReactNode } from 'react'
import { IconType } from 'react-icons'
import COLORS from 'utils/Colors'

type ItemProps = {
  active: boolean
  viewPost: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & ItemProps

const Item = styled(({ active, viewPost, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  width: 50px;
  height: 48px;
  color: ${({ viewPost }) => (viewPost ? COLORS.white : COLORS.grey_semi_dark)};
  font-weight: ${({ active }) => (active ? 'bold' : 'none')};
  svg {
    position: relative;
    top: 2px;
    left: -3px;
  }
  @media (max-width: 768px) {
    svg {
      display: none;
    }
  }
`
const NavbarItemWrapper = styled.li`
  width: 100px;
  @media (max-width: 768px) {
    width: 70px;
  }
`

type NavbarItemProps = {
  to: string
  label: string
  Icon: IconType
  path: string
  viewPost: boolean
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({
  to,
  label,
  Icon,
  path,
  viewPost,
}) => {
  return (
    <NavbarItemWrapper>
      <Item to={to} active={path === label} viewPost={viewPost}>
        <Icon />
        {label}
      </Item>
    </NavbarItemWrapper>
  )
}
export default NavbarItem
