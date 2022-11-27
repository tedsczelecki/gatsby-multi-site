import React from 'react';
import HStack from '../General/HStack';
import Logo from '../Logo/Logo';
import HeaderNavigation from '../Navigation/HeaderNavigation';
const Header = () => (React.createElement(HStack, { justifyContent: "space-between", alignItems: "center", width: "100%" },
    React.createElement(Logo, null),
    React.createElement(HeaderNavigation, null)));
export default Header;
