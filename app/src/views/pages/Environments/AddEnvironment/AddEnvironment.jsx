import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import hashCreator from '@/utils/hashCreator';

import StyledAddEnvironment from './AddEnvironment.styles';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import EnvironmentForm from '@components/forms/EnvironmentForm/EnvironmentForm';

const AddEnvironment = ({ history }) => {
  const devicesList = useSelector((state) => {
    const devices = [...state.devices];
    devices.forEach((device) => {
      device.status = false;
    });
    return devices;
  });
  const environmentList = useSelector((state) => {
    return state.environments;
  });
  const [id, setId] = useState(hashCreator('env', environmentList));
  const [envDevices, setEnvDevices] = useState([]);
  const [availableDevices, setAvailableDevices] = useState([...devicesList]);

  const handleRemoveDevice = (deviceId) => {
    const newAvailableDevice = envDevices.find((device) => {
      return device.id === deviceId;
    });
    newAvailableDevice.status = false;
    const newEnvDevices = envDevices.filter((device) => {
      return device.id !== deviceId;
    });

    let newAvailableDevicesList = [...availableDevices, newAvailableDevice];

    setAvailableDevices(newAvailableDevicesList);
    setEnvDevices(newEnvDevices);
  };

  return (
    <StyledAddEnvironment>
      <PageWrapper name='Environments' history={history}>
        <EnvironmentForm
          initialName=''
          envId={id}
          envDevices={envDevices}
          setEnvDevices={setEnvDevices}
          availableDevices={availableDevices}
          setAvailableDevices={setAvailableDevices}
          handleRemoveDevice={handleRemoveDevice}
          totalDevices={devicesList.length}
          history={history}
        />
      </PageWrapper>
    </StyledAddEnvironment>
  );
};

export default AddEnvironment;
