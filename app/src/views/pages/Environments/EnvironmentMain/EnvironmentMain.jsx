//Dependencias
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//Recursos
import StyledEnvironmentMain from './EnvironmentMain.styles';
import MainWrapper from '@components/layout/wrapper/MainWrapper/MainWrapper';
import Header from '@components/layout/header/Header';
import Card from '@components/cards/Card';
import db from '@/services/firebase';

const options = [{ id: 1, title: 'Add Enviroment', path: 'add_enviroment' }];

const EnvironmentPage = () => {
  const dispatch = useDispatch();
  const enviromentList = useSelector((state) => {
    return state.environments;
  });
  const devicesList = useSelector((state) => {
    return state.devices;
  });
  //Pendiente: Una forma de difetenciar cuando el ambiente se encuentre activo
  const handleClick = async (id, devices) => {
    for (let [key, value] of Object.entries(devices)) {
      const deviceStatus = db.ref(`devices/${key}/`);
      await deviceStatus.update({ status: value });
      dispatch({
        type: 'GET_DEVICE_STATUS',
        payload: { id: key, status: value },
      });
    }
  };

  return (
    <StyledEnvironmentMain>
      <MainWrapper>
        <Header className='header' text='Environments' options={options} />
        <div className='content'>
          {/*
          Cada una de las Simple Card representa un botón que realizará 
          acciones programadas por el usuario, encenderá y apagará dispositivos 
          dependiendo de las preferencias del usuario
          */}
          {enviromentList.map((enviroment) => {
            return (
              <Card
                key={enviroment.id}
                name={enviroment.name}
                id={enviroment.id}
                devices={enviroment.devices}
                devicesList={devicesList}
                handleClick={() => {
                  handleClick(enviroment.id, enviroment.devices);
                }}
              />
            );
          })}
        </div>
      </MainWrapper>
    </StyledEnvironmentMain>
  );
};
export default EnvironmentPage;