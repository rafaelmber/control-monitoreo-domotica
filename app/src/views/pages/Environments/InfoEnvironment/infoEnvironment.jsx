import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeEnviroment } from '../../../../services/firebase';
import StyledInfoEnvironment from './infoEnvironments.styles';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ListDevices from '@components/layout/listItems/ListDevices/ListDevices';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import EditIcon from '@assets/edit.svg';
import DeleteIcon from '@assets/delete.svg';
import DeleteModal from '@components/layout/modal/DeleteModal/DeleteModal';

const InfoEnvironment = ({ history }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const environment = useSelector((state) => {
    let envSelected = state.environments.find((environment) => {
      return environment.id === id;
    });

    const devices = [];
    envSelected.devices.forEach((envDevice) => {
      let device = state.devices.find((deviceState) => {
        return deviceState.id === envDevice.id;
      });
      device = { ...device, status: envDevice.status };
      devices.push(device);
    });
    const newEnvSelected = { ...envSelected, devices: devices };
    return newEnvSelected;
  });

  const handleDeviceClick = (id) => {
    history.push(`/devices/info/${id}`);
  };
  const handleEditButton = () => {
    history.push(`/environments/edit/${id}`);
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
    history.push('/environments');
  };

  return (
    <StyledInfoEnvironment>
      <PageWrapper name='Environments' history={history}>
        <h3>{environment.name}</h3>
        <div className='columns'>
          <span>Device</span>
          <span>Status</span>
        </div>
        {environment.devices.map((device) => {
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
          <ContextButton
            text='Edit'
            textColor='var(--lightest-neutral)'
            bgColor='var(--secundary)'
            Icon={EditIcon}
            onClick={handleEditButton}
          />
          <ContextButton
            text='Delete'
            textColor='var(--lightest-neutral)'
            bgColor='var(--red)'
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
