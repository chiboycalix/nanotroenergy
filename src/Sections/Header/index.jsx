import React from 'react';
import { Link, Button } from '../../components';

import { HeaderWrapper, LogoWrapper, NavLinksWrapper, UL, LI } from './header.styles';

const routes = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    type: 'link'
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
    type: 'link'
  },
  {
    id: 3,
    name: 'Solutions',
    path: '/solutions',
    type: 'link'
  },
  {
    id: 4,
    name: 'Products',
    path: '/products',
    type: 'link'
  },
  {
    id: 5,
    name: 'Contact Us',
    path: '/contact-us',
    type: 'link'
  }
]

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        Logo
      </LogoWrapper>
      <NavLinksWrapper>
        <UL>
          {routes.map((route) => {
            return <LI key={route.id}>
              <Link {...route} />
            </LI>
          })}
        </UL>

        <Button>Check our store</Button>
      </NavLinksWrapper>
    </HeaderWrapper>
  )
}

export default Header;
