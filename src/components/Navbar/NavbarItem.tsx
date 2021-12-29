import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { FunctionComponent, ReactNode } from 'react'
import { IconType } from 'react-icons'
import COLORS from 'utils/Colors'

type ItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & ItemProps

const Item = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  width: 50px;
  height: 48px;
  color: ${({ active }) => (active ? COLORS.black : COLORS.grey_semi_dark)};
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
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({
  to,
  label,
  Icon,
}) => {
  console.log(window.location.pathname)
  const activePath =
    window.location.pathname === '/'
      ? 'home'
      : window.location.pathname.split('/')[1]
  const upperPath =
    activePath[0].toUpperCase() + activePath.slice(1, activePath.length)
  return (
    <NavbarItemWrapper>
      <Item to={to} active={upperPath === label}>
        <Icon />
        {label}
      </Item>
    </NavbarItemWrapper>
  )
}
export default NavbarItem
