import React from 'react';
import StyledMainWrapper from './MainWrapper.styles';

import Wrapper from '../Wrapper';
import NavBar from '@components/layout/navigation/NavBar/Navbar';
import MainHeader from '@components/layout/MainHeader/MainHeader';

const MainWrapper = ({ title, children }) => {
  return (
    <StyledMainWrapper>
      {/* <div className='content-app'>
        <Wrapper>{children}</Wrapper>
      </div> */}
      <MainHeader title={title} className='header' />
      <div className='content'>{children}</div>
      <NavBar className='nav' />
    </StyledMainWrapper>
  );
};

export default MainWrapper;
