//Dependencias
import React from 'react';
//Recursos
import StyledEnviromentPage from './EnviromentsPage.styles';
import Wrapper from '@components/layout/wrapper/Wrapper';
import Header from '@components/layout/header/Header';
import SimpleCard from '@components/cards/simpleCard/SimpleCard';

const EnviromentsPage = () => {
  return (
    <StyledEnviromentPage>
      <Wrapper>
        <Header className='header' text='Enviroments'></Header>
        <div className='content'>
          {/*
          Cada una de las Simple Card representa un botón que realizará 
          acciones programadas por el usuario, encenderá y apagará dispositivos 
          dependiendo de las preferencias del usuario
          */}
          <SimpleCard name='Salir de casa' />
          <SimpleCard name='Ver televisión' />
          <SimpleCard name='Hora de dormir' />
        </div>
      </Wrapper>
    </StyledEnviromentPage>
  );
};
export default EnviromentsPage;
