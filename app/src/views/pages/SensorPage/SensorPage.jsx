import React from 'react';
import StyledSensorPage from './SensorPage.styles';
import Wrapper from '@components/layout/wrapper/Wrapper';
import Header from '@components/layout/header/Header';

const SensorPage = () => {
  return (
    <StyledSensorPage>
      <Wrapper>
        <Header className='header' text='Sensors' />
        <div className='content'>Hola como estás</div>
      </Wrapper>
    </StyledSensorPage>
  );
};
export default SensorPage;
