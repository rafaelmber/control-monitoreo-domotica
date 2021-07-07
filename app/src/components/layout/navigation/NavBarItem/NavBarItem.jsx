import React from 'react';
import StyledNavBarItem from './NavBarItem.styles';
import { Link } from 'react-router-dom';

const NavBarItem = ({ children, isActive, route }) => {
  return (
    <StyledNavBarItem isActive={isActive}>
      <Link className='link' to={route}>
        {children}
      </Link>
    </StyledNavBarItem>
  );
};

export default NavBarItem;
