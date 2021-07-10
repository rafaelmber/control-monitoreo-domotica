import React from 'react';
import StyledDevicesPage from './DevicesPage.styles';
import Card from '@components/cards/Card';
import Wrapper from '@components/layout/wrapper/Wrapper';
import Header from '@components/layout/header/Header';
import data from '@/utils/data.json';
import json2array from '@/utils/json2array';
const devices = json2array(data.devices);

const DevicesPage = () => {
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
