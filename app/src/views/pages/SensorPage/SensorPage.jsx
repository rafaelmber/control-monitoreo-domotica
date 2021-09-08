//Dependencias
import React from 'react';
//Recursos
import StyledSensorPage from './SensorPage.styles';
import Wrapper from '@components/layout/wrapper/Wrapper';
import Header from '@components/layout/header/Header';

const SensorPage = () => {
  return (
    <StyledSensorPage>
      <Wrapper>
        <Header className='header' text='Sensors' />
        {/*
          Aquí es donde se debe agregar el contenido que se debe mostrar en la
          página de Sensores
          */}
        <div className='content'>Hola como estás</div>
      </Wrapper>
    </StyledSensorPage>
  );
};
export default SensorPage;
