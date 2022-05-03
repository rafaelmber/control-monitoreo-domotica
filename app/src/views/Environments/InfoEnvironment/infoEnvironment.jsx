import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { removeEnviroment } from '@/services/firebase';
import StyledInfoEnvironment from './infoEnvironments.styles';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ListDevices from '@components/layout/listItems/ListDevices/ListDevices';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import EditIcon from '@assets/edit.svg';
import DeleteIcon from '@assets/delete.svg';
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
        const newDevice = { ...device, status: envDevice.status };
        devices.push(newDevice);
      });
      const newEnvSelected = { ...envSelected, devices: devices };
      return newEnvSelected;
    } else {
      return envSelected;
    }
  });

  const handleDeviceClick = (id) => {
    navigate(`/devices/info/${id}`);
  };
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
        <div className='columns'>
          <span>Device</span>
          <span>Status</span>
        </div>
        {environment !== undefined &&
          environment.devices.map((device) => {
            return (
              <ListDevices
                key={device.id}
                name={device.name}
                type={device.type}
                status={device.status}
                handleClick={() => {
                  handleDeviceClick(device.id);
                }}
              />
            );
          })}
        <div className='buttons'>
          {/**
          
          <ContextButton
            text='Edit'
            textColor='var(--lightest-neutral)'
            bgColor='var(--secundary)'
            Icon={EditIcon}
            onClick={handleEditButton}
          />
           */}
          <ContextButton
            text='Delete'
            type='danger'
            Icon={DeleteIcon}
            onClick={handleDeleteModal}
          />
        </div>
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
