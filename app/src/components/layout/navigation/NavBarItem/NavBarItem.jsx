import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import StyledNavBarItem from './NavBarItem.styles';
import { Link } from 'react-router-dom';

const NavBarItem = ({ button }) => {
  const [isActive, setIsActive] = useState(false);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === button.route) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location]);

  const handleClick = () => {};

  return (
    <StyledNavBarItem isActive={isActive} onClick={handleClick}>
      <Link className='link' to={button.route}>
        {button.icons.map((icon) => {
          return <icon.icon key={icon.id} className='icon' />;
        })}
      </Link>
    </StyledNavBarItem>
  );
};

export default NavBarItem;
