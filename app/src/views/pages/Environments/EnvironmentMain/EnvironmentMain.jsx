//Dependencias
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//Recursos
import StyledEnvironmentMain from './EnvironmentMain.styles';
import MainWrapper from '@components/layout/wrapper/MainWrapper/MainWrapper';
import Header from '@components/layout/header/Header';
import Card from '@components/cards/Card';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import PlusIcon from '@assets/plus.svg';
import db from '@/services/firebase';

const options = [{ id: 1, title: 'Add Enviroment', path: '/environments/add' }];

const EnvironmentPage = ({ history }) => {
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
      dispatch({
        type: 'GET_DEVICE_STATUS',
        payload: { id: device.id, status: device.status },
      });
    }
  };
  const handleAddButton = () => {
    history.push('/environments/add');
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
          {enviromentList.length === 0 && (
            <div className='message'>
              <h5 className='message-text'>You don't have any Enviroment</h5>
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
        </div>
      </MainWrapper>
    </StyledEnvironmentMain>
  );
};
export default EnvironmentPage;
