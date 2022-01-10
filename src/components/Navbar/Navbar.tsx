import React, { FunctionComponent, useEffect, useRef } from 'react'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { BsPencilSquare } from 'react-icons/bs'
import { IoBook } from 'react-icons/io5'
import styled from '@emotion/styled'
import NavbarItem from './NavbarItem'
import COLORS from 'utils/Colors'

type NavbarWrapperProps = {
  viewPost: boolean
}
const NavbarWrapper = styled.div<NavbarWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 48px;
  /* border-bottom: 2px solid
    ${({ viewPost }) => (viewPost ? 'none' : COLORS.border_bottom_color)}; */
  backdrop-filter: blur(7px);
  background-color: ${props =>
    props.viewPost ? 'rgba(39, 38, 38, 0.5)' : 'none'};
`
const NavbarList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
  width: 768px;
  height: 48px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
`
type IconBlockProps = {
  viewPost: boolean
}

const IconBlock = styled.div<IconBlockProps>`
  color: ${({ viewPost }) => (viewPost ? COLORS.white : COLORS.grey_semi_dark)};
  @media (max-width: 500px) {
    display: none;
  }
`
const ItemBlock = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`

const Navbar: FunctionComponent = () => {
  const items = [
    {
      to: '/',
      label: 'Home',
      Icon: FaHome,
    },
    {
      to: '/series',
      label: 'Series',
      Icon: IoBook,
    },
    {
      to: '/posts',
      label: 'Posts',
      Icon: BsPencilSquare,
    },
    {
      to: '/about',
      label: 'About',
      Icon: FaUserAlt,
    },
  ]
  const activePath =
    window.location.pathname === '/'
      ? 'home'
      : window.location.pathname.split('/')[1]
  const upperPath =
    activePath[0].toUpperCase() + activePath.slice(1, activePath.length)
  const viewPost = window.location.pathname.split('/')[2] ? true : false

  return (
    <NavbarWrapper viewPost={viewPost} id="Navbar">
      <NavbarList>
        <IconBlock viewPost={viewPost}>Don’t dream it, be it</IconBlock>
        <ItemBlock>
          {items.map(item => (
            <NavbarItem
              key={item.label}
              {...item}
              path={upperPath}
              viewPost={viewPost}
            />
          ))}
        </ItemBlock>
      </NavbarList>
    </NavbarWrapper>
  )
}

export default Navbar
