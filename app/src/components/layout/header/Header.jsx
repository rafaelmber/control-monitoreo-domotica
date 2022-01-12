import React, { useState } from 'react';
import StyledHeader from './Header.styles';
import MoreButtonModal from '../modal/MoreButtonModal/MoreButtonModal';
import MoreIcon from '@assets/more.svg';
const Header = ({ text, options }) => {
  const [isMoreModalActive, setIsMoreModalActive] = useState(false);

  const handleMoreButton = () => {
    setIsMoreModalActive(true);
  };
  const handleCloseMoreModal = () => {
    setIsMoreModalActive(false);
  };

  return (
    <StyledHeader>
      <h2>{text}</h2>
      <MoreIcon className='more-icon' onClick={handleMoreButton} />
      <MoreButtonModal
        isOpen={isMoreModalActive}
        closeModal={handleCloseMoreModal}
        options={options}
      />
    </StyledHeader>
  );
};
export default Header;
