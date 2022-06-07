import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import hashCreator from '@/utils/hashCreator';
import { setDevice } from '@/services/firebase';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import DeviceForm from '@components/forms/DeviceForm/DeviceForm';
import { addDeviceInRoom } from '@/store/rooms/rooms.actions';
import { addDevice } from '@/store/devices/devices.actions';

const AddDevice = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const devices = useSelector((state) => {
    return state.devices;
  });

  const saveNewDevice = async (deviceData) => {
    const deviceId = hashCreator('device', devices);
    const newDevice = {
      ...deviceData,
      id: deviceId,
      status: false,
    };
    await setDevice(newDevice);
    dispatch(addDeviceInRoom(newDevice.room, newDevice.id));
    dispatch(addDevice(newDevice));
    console.log('New Device saved');
    navigate('/devices');
  };

  return (
    <PageWrapper name='Devices' history={history}>
      <DeviceForm sendData={saveNewDevice} />
    </PageWrapper>
  );
};

export default AddDevice;
