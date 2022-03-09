//Dependencias
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
//Recursos
import StyledDevicesPage from './DevicesPage.styles';
import DevicesCard from '@components/cards/devicesCard/DevicesCard';
import MainWrapper from '@components/layout/wrapper/MainWrapper/MainWrapper';
import Header from '@components/layout/header/Header';

const options = [{ id: 1, title: 'Add Device', path: 'add_device' }];

const DevicesPage = () => {
  const devices = useSelector((state) => {
    return state.devices;
  });
  return (
    <StyledDevicesPage>
      <MainWrapper>
        <Header className='header' text='Devices' options={options} />
        <div className='content'>
          {/*
          Se crea una sola tarjeta en la que se pueden controlar todos los
          dispositivos de la casa
          */}
          <DevicesCard name='All devices' devices={devices} />
        </div>
      </MainWrapper>
    </StyledDevicesPage>
  );
};

export default DevicesPage;
