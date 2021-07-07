import React from 'react';
import StyledNavBarItem from './NavBarItem.styles';

const NavBarItem = ({ children, isActive }) => {
  return <StyledNavBarItem isActive={isActive}>{children}</StyledNavBarItem>;
};

export default NavBarItem;
