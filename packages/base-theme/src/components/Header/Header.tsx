import React from 'react';
import HStack from '../General/HStack';
import Logo from '../Logo/Logo';
import HeaderNavigation from '../Navigation/HeaderNavigation';

const Header = () => (
  <HStack justifyContent="space-between" alignItems="center" width="100%">
    <Logo />
    <HeaderNavigation />
  </HStack>
);

export default Header;
