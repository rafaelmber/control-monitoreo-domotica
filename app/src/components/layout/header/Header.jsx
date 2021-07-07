import React from 'react';
import StyledHeader from './Header.styles';
import MoreIcon from '@assets/more.svg';
const Header = () => {
  return (
    <StyledHeader>
      <h2>Home</h2>
      <MoreIcon className='more-icon' />
    </StyledHeader>
  );
};
export default Header;
