import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { removeEnviroment } from '@/services/firebase';
import StyledInfoEnvironment from './infoEnvironments.styles';

import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import DevicesList from '@components/layout/DevicesList/DevicesList';
import EditAndDeleteButtons from '@components/forms/EditAndDeleteButtons/EditAndDeleteButtons';
import DeleteModal from '@components/layout/modal/DeleteModal/DeleteModal';

const InfoEnvironment = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const environment = useSelector((state) => {
    let envSelected = state.environments.find((environment) => {
      return environment.id === id;
    });
    if (envSelected !== undefined) {
      const devices = [];
      envSelected.devices.forEach((envDevice) => {
        const device = state.devices.find((deviceState) => {
          return deviceState.id === envDevice.id;
        });
        const room = state.rooms.find((roomState) => {
          return device.room === roomState.id;
        });
        const newDevice = {
          ...device,
          status: envDevice.status,
          room: room.name,
        };
        devices.push(newDevice);
      });
      const newEnvSelected = { ...envSelected, devices: devices };
      return newEnvSelected;
    } else {
      return envSelected;
    }
  });

  const handleEditButton = () => {
    navigate(`/environments/edit/${id}`);
  };
  const handleDeleteModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleDelete = async () => {
    await removeEnviroment(id);
    dispatch({
      type: 'DELETE_ENVIRONMENT',
      payload: id,
    });
    console.log('Environment Deleted');
    setIsModalOpen(false);
    navigate('/environments');
  };

  return (
    <StyledInfoEnvironment>
      <PageWrapper name='Environments'>
        {environment !== undefined && <h3>{environment.name}</h3>}
        {environment !== undefined && (
          <small>
            <i>Id: {environment.id}</i>
          </small>
        )}
        <div className='columns'>
          <span>Devices</span>
          <span>Status</span>
        </div>
        {environment !== undefined &&
          environment.devices.map((device) => {
            return (
              <DevicesList
                key={device.id}
                id={device.id}
                name={device.name}
                type={device.type}
                room={device.room}
              >
                <ActivateButton isActive={device.status} />
              </DevicesList>
            );
          })}
        <EditAndDeleteButtons
          handleEdit={handleEditButton}
          handleDelete={handleDeleteModal}
        />
        <DeleteModal
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          handleDelete={handleDelete}
          message={`Este Ambiente se eliminará.¿Desea continuar?`}
        />
      </PageWrapper>
    </StyledInfoEnvironment>
  );
};

export default InfoEnvironment;
