//Dependencias
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//Recursos
import MainWrapper from '@components/layout/wrapper/MainWrapper/MainWrapper';
import Card from '@components/cards/Card';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import PlusIcon from '@assets/plus.svg';
import db from '@/services/firebase';
import { setDeviceStatus } from '@/store/devices/devices.actions';

const options = [
  { id: 1, title: 'Add Enviroment', path: '/environments/add', Icon: PlusIcon },
];

const EnvironmentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enviromentList = useSelector((state) => {
    return state.environments;
  });
  const devicesList = useSelector((state) => {
    return state.devices;
  });
  //Pendiente: Una forma de difetenciar cuando el ambiente se encuentre activo
  const handleClick = async (id, devices) => {
    for (const device of devices) {
      const deviceStatus = db.ref(`/systems/system_1/devices/${device.id}/`);
      await deviceStatus.update({ status: device.status });
      dispatch(setDeviceStatus(device.id, device.status));
    }
  };
  const handleAddButton = () => {
    navigate('/environments/add');
  };

  return (
    <MainWrapper title='Environments' optionsList={options}>
      {/*
          Cada una de las Simple Card representa un botón que realizará 
          acciones programadas por el usuario, encenderá y apagará dispositivos 
          dependiendo de las preferencias del usuario
          */}
      {enviromentList.length === 0 && (
        <div className='message'>
          <h5 className='message-text'>You don't have any Environment</h5>
          <ContextButton
            text='Add a new Environment'
            textColor='var(--lightest-neutral)'
            bgColor='var(--dark-primary)'
            Icon={PlusIcon}
            onClick={handleAddButton}
            className='message-button'
          />
        </div>
      )}
      {enviromentList.length !== 0 &&
        enviromentList.map((enviroment) => {
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
    </MainWrapper>
  );
};
export default EnvironmentPage;
