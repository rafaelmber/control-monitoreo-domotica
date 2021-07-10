import React from 'react';
import StyledDevicesPage from './DevicesPage.styles';
import Card from '@components/cards/Card';
import data from '@/utils/data.json';
import json2array from '@/utils/json2array';
const devices = json2array(data.devices);

const DevicesPage = () => {
  return (
    <StyledDevicesPage>
      <Card name='All devices' devices={devices} />
    </StyledDevicesPage>
  );
};

export default DevicesPage;
