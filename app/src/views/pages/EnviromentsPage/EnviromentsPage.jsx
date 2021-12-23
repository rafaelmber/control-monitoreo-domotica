//Dependencias
import React from 'react';
import { useSelector } from 'react-redux';
//Recursos
import StyledEnviromentPage from './EnviromentsPage.styles';
import Wrapper from '@components/layout/wrapper/Wrapper';
import Header from '@components/layout/header/Header';
import SimpleCard from '@components/cards/simpleCard/SimpleCard';
import db from '@/services/firebase';

const EnviromentsPage = () => {
  const enviromentList = useSelector((state) => {
    return state.enviroments;
  });

  const handleClick = async (id, devices) => {
    for (let [key, value] of Object.entries(devices)) {
      const deviceStatus = db.ref(`devices/${key}/`);
      await deviceStatus.update({ status: value });
    }
  };
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
          {enviromentList.map((enviroment) => {
            return (
              <SimpleCard
                name={enviroment.name}
                key={enviroment.id}
                handleClick={() => {
                  handleClick(enviroment.id, enviroment.devices);
                }}
              />
            );
          })}
        </div>
      </Wrapper>
    </StyledEnviromentPage>
  );
};
export default EnviromentsPage;
