import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import EnvironmentForm from '@components/forms/EnvironmentForm/EnvironmentForm';

const EditEnvironment = () => {
  const history = useHistory();
  const [envDevice, setEnvDevice] = useState({});

  const { id } = useParams();
  const environment = useSelector((state) => {
    return state.environments.find((env) => {
      return env.id === id;
    });
  });
  const devicesList = useSelector((state) => {
    return state.devices;
  });

  useEffect(() => {
    const newEnv = { ...environment };
    console.log(newEnv);
    if (newEnv !== undefined) {
      const tempDevices = [];
      newEnv.devices.forEach((envDev) => {
        const stateDevice = devicesList.find((curDevice) => {
          return envDev.id === curDevice.id;
        });
        tempDevices.push(stateDevice);
      });
      newEnv.devices = tempDevices;
      console.log(newEnv);
      setEnvDevice(newEnv);
    }
  }, [environment, devicesList]);

  console.log(environment);

  return <PageWrapper name='Enviroments' history={history}></PageWrapper>;
};

export default EditEnvironment;
