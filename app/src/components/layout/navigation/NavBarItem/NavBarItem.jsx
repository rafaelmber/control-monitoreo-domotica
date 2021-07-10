import React from 'react';
import StyledNavBarItem from './NavBarItem.styles';
import { Link } from 'react-router-dom';

const NavBarItem = ({ onClick, button }) => {
  return (
    <StyledNavBarItem
      isActive={button.status}
      value='12344'
      name='Home'
      onClick={() => onClick(button.id)}
    >
      <Link className='link' to={button.route}>
        {button.icons.map((icon) => {
          return <icon.icon key={icon.id} className='icon' />;
        })}
      </Link>
    </StyledNavBarItem>
  );
};

export default NavBarItem;
