import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEnvironment } from '@/services/firebase';
import { addEnvironment } from '@/store/environments/environments.actions';
import hashCreator from '@/utils/hashCreator';

import StyledAddEnvironment from './AddEnvironment.styles';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import EnvironmentForm from '@components/forms/EnvironmentForm/EnvironmentForm';

const AddEnvironment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const environments = useSelector((state) => {
    return state.environments;
  });

  const sendData = async (environmentData) => {
    const id = hashCreator('env', environments);
    const newListDevices = environmentData.devices.map((device) => {
      return { id: device.id, status: device.status };
    });
    const newEnvironment = {
      ...environmentData,
      id: id,
      devices: newListDevices,
    };
    await setEnvironment(newEnvironment);
    dispatch(addEnvironment(newEnvironment));
    navigate('/environments');
  };

  return (
    <StyledAddEnvironment>
      <PageWrapper name='Environments'>
        <EnvironmentForm sendData={sendData} />
      </PageWrapper>
    </StyledAddEnvironment>
  );
};

export default AddEnvironment;
