//Dependencias
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  console.log(enviromentList);
  const dispatch = useDispatch();

  useEffect(() => {
    db.ref('enviroments/').once('value', (snapshot) => {
      dispatch({
        type: 'GET_ENVIROMENTS',
        payload: snapshot.val(),
      });
    });
  }, [dispatch]);
  const handleClick = async (id, devices) => {
    console.log(id);
    console.log('Devices', devices);
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
