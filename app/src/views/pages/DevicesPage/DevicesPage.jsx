import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import StyledDevicesPage from './DevicesPage.styles';
import Card from '@components/cards/Card';
import Wrapper from '@components/layout/wrapper/Wrapper';
import Header from '@components/layout/header/Header';
import json2array from '@/utils/json2array';

const DevicesPage = () => {
  const devices = useSelector((state) => {
    return json2array(state.devices);
  });
  return (
    <StyledDevicesPage>
      <Wrapper>
        <Header className='header' text='Devices' />
        <div className='content'>
          <Card name='All devices' devices={devices} />
        </div>
      </Wrapper>
    </StyledDevicesPage>
  );
};

export default DevicesPage;
