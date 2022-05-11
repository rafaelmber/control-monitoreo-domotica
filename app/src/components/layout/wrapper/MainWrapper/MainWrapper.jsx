import React, { useState } from 'react';

import StyledMainWrapper from './MainWrapper.styles';
import NavBar from '@components/layout/navigation/NavBar/Navbar';
import MoreIcon from '@assets/more.svg';
import OptionsModal from '@components/layout/modal/OptionsModal/OptionsModal';

const MainWrapper = ({ title, children, optionsList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionsClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledMainWrapper>
      <header className='header'>
        <h2>{title}</h2>
        <button onClick={handleOptionsClick} className='header__button'>
          <MoreIcon className='header__icon' />
        </button>
      </header>
      <div className='content'>{children}</div>
      <NavBar className='nav' />
      <OptionsModal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        options={optionsList}
      />
    </StyledMainWrapper>
  );
};

export default MainWrapper;
