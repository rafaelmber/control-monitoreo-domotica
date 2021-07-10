import React from 'react';
import StyledHeader from './Header.styles';
import MoreIcon from '@assets/more.svg';
const Header = ({ text }) => {
  return (
    <StyledHeader>
      <h2>{text}</h2>
      <MoreIcon className='more-icon' />
    </StyledHeader>
  );
};
export default Header;
