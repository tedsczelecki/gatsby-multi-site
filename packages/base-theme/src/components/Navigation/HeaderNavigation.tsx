import React from 'react';
import HStack from '../General/HStack';
import { Link } from 'gatsby';

const HeaderNavigation = () => {
  return (
    <HStack width="max-content">
      <Link to="/">Home</Link>
      <Link to="/vehicles">Vehicles</Link>
      <Link to="/contact">Contact</Link>
    </HStack>
  );
};

export default HeaderNavigation;
