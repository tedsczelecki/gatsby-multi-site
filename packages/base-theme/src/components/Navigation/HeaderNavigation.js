import React from 'react';
import HStack from '../General/HStack';
import { Link } from 'gatsby';
const HeaderNavigation = () => {
    return (React.createElement(HStack, { width: "max-content" },
        React.createElement(Link, { to: "/" }, "Home"),
        React.createElement(Link, { to: "/vehicles" }, "Vehicles"),
        React.createElement(Link, { to: "/contact" }, "Contact")));
};
export default HeaderNavigation;
