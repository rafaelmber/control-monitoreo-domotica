import React, { useState } from 'react';
import StyledMainWrapper from './MainWrapper.styles';

import NavBar from '@components/layout/navigation/NavBar/Navbar';
import MainHeader from '@components/layout/MainHeader/MainHeader';

import OptionsModal from '@components/layout/modal/OptionsModal/OptionsModal';

const MainWrapper = ({ title, children, optionsList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOptionsModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledMainWrapper>
      <MainHeader
        title={title}
        className='header'
        onOptionsClick={handleOptionsModal}
      />
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
