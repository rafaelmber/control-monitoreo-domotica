import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import DeviceForm from '@components/forms/DeviceForm/DeviceForm';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import { setDevice } from '@/services/firebase';
import { editDevice } from '@/store/devices/devices.actions';

const EditDevice = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const device = useSelector((state) => {
    return state.devices.find((deviceState) => {
      return deviceState.id === id;
    });
  });
  const saveDevice = async (deviceData) => {
    const device = {
      ...deviceData,
      id: id,
    };
    await setDevice(device);
    dispatch(editDevice(device));
    navigate(`/devices/info/${id}`);
  };

  return (
    <PageWrapper name='Devices'>
      <DeviceForm deviceData={device} sendData={saveDevice} />
    </PageWrapper>
  );
};

export default EditDevice;
