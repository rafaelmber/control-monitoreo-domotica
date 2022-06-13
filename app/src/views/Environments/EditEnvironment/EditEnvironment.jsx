import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setEnvironment } from '@/services/firebase';
import { editEnvironment } from '@/store/environments/environments.actions';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import EnvironmentForm from '@components/forms/EnvironmentForm/EnvironmentForm';

const EditEnvironment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const environment = useSelector((state) => {
    const selectedEnvironment = state.environments.find((envState) => {
      return envState.id === id;
    });
    const newDevicesList = selectedEnvironment?.devices.map((envDevice) => {
      const device = state.devices.find((device) => {
        return device.id === envDevice.id;
      });
      const room = state.rooms.find((roomState) => {
        return roomState.id === device.room;
      });
      const newDevice = {
        ...device,
        room: room.name,
        status: envDevice.status,
      };
      return newDevice;
    });
    const newEnv = { ...selectedEnvironment, devices: newDevicesList };
    return newEnv;
  });

  const sendData = async (environmentData) => {
    console.log(environmentData);
    const newListDevices = environmentData.devices.map((device) => {
      return { id: device.id, status: device.status };
    });
    const newEnvironment = {
      ...environmentData,
      id: id,
      devices: newListDevices,
    };
    await setEnvironment(newEnvironment);
    dispatch(editEnvironment(newEnvironment));
    navigate('/environments');
  };

  return (
    <PageWrapper name='Enviroments'>
      {environment !== undefined && (
        <EnvironmentForm environmentData={environment} sendData={sendData} />
      )}
    </PageWrapper>
  );
};

export default EditEnvironment;
