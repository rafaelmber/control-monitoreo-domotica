import React from 'react';
import StyledMainApp from './MainApp.styles';
import Header from '@components/layout/header/Header';
import NavBar from '@components/layout/navigation/NavBar/NavBar';
const MainApp = () => {
  return (
    <StyledMainApp>
      <Header className='header' />
      <div className='content-app'></div>
      <NavBar className='footer' />
    </StyledMainApp>
  );
};
export default MainApp;
