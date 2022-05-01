//Dependencias
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
//Recursos
import StyledDevicesMain from './DevicesMain.styles';
import DevicesCard from '@components/cards/devicesCard/DevicesCard';
import MainWrapper from '@components/layout/wrapper/MainWrapper/MainWrapper';
import Header from '@components/layout/header/Header';

import AddIcon from '@assets/plus.svg';

const options = [
  { id: 1, title: 'Add Device', path: '/devices/add', Icon: AddIcon },
];

const DevicesPage = () => {
  const devices = useSelector((state) => {
    return state.devices;
  });
  return (
    <MainWrapper title='Devices' optionsList={options}>
      {/*
          Se crea una sola tarjeta en la que se pueden controlar todos los
          dispositivos de la casa
          */}
      <DevicesCard name='All devices' devices={devices} />
    </MainWrapper>
  );
};

export default DevicesPage;
