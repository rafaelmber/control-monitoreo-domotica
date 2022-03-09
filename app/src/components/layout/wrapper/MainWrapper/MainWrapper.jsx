import React from 'react';
import StyledMainWrapper from './MainWrapper.styles';

import Wrapper from '../Wrapper';
import NavBar from '@components/layout/navigation/NavBar/Navbar';

const MainWrapper = ({ children }) => {
  return (
    <StyledMainWrapper>
      <Wrapper className='content-app'>{children}</Wrapper>
      <NavBar className='nav' />
    </StyledMainWrapper>
  );
};

export default MainWrapper;
