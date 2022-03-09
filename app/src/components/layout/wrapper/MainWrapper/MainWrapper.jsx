import React from 'react';
import StyledMainWrapper from './MainWrapper.styles';

import Wrapper from '../Wrapper';
import NavBar from '@components/layout/navigation/NavBar/Navbar';

const MainWrapper = ({ children }) => {
  return (
    <StyledMainWrapper>
      <div className='content-app'>
        <Wrapper>{children}</Wrapper>
      </div>
      <NavBar className='nav' />
    </StyledMainWrapper>
  );
};

export default MainWrapper;
