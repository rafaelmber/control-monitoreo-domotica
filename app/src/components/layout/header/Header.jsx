import React from 'react';
import StyledHeader from './Header.styles';
import MoreIcon from '@assets/more.svg';
const Header = ({ text, handleMoreButton }) => {
  return (
    <StyledHeader>
      <h2>{text}</h2>
      <MoreIcon className='more-icon' onClick={handleMoreButton} />
    </StyledHeader>
  );
};
export default Header;
