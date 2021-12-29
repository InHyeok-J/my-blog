import React, { FunctionComponent } from 'react'
import { FaHome, FaUserAlt, FaSearch } from 'react-icons/fa'
import { BsPencilSquare } from 'react-icons/bs'
import { IoBook } from 'react-icons/io5'
import styled from '@emotion/styled'
import NavbarItem from './NavbarItem'
import { StaticImage } from 'gatsby-plugin-image'

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 48px;
  border-bottom: 2px solid rgb(234, 235, 236);
  backdrop-filter: blur(7px);
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

const IconBlock = styled.div`
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
  return (
    <NavbarWrapper>
      <NavbarList>
        <IconBlock>Don’t dream it, be it</IconBlock>
        <ItemBlock>
          {items.map(item => (
            <NavbarItem key={item.label} {...item} />
          ))}
        </ItemBlock>
      </NavbarList>
    </NavbarWrapper>
  )
}

export default Navbar
