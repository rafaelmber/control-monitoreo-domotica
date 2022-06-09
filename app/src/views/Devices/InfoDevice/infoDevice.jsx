import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  removeDevice,
  toggleDeviceStatus as toggleDeviceStatusOnDb,
} from '@/services/firebase';

import {
  deleteDevice,
  toggleDeviceStatus,
} from '@/store/devices/devices.actions';
import { deleteDeviceInEnvironments } from '@/store/environments/environments.actions';

import StyledInfoDevice from './InfoDevice.styles';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';
import DeleteModal from '@components/layout/modal/DeleteModal/DeleteModal';
import EditAndDeleteButtons from '@components/forms/EditAndDeleteButtons/EditAndDeleteButtons';

const InfoDevice = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const device = useSelector((state) => {
    return state.devices.find((stateDevice) => {
      return stateDevice.id === id;
    });
  });

  const room = useSelector((state) => {
    return state.rooms.find((room) => {
      return room.id === device?.room;
    });
  });

  const type = useSelector((state) => {
    return state.types.find((type) => {
      return type.id === device?.type;
    });
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setButtonStatus] = useState(device?.status);

  const handleStatusClick = async () => {
    await toggleDeviceStatusOnDb(id, device.status);
    dispatch(toggleDeviceStatus(id));
    setButtonStatus(!device.status);
  };

  const handleDeleteButton = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteDevice = async () => {
    await removeDevice(id);
    dispatch(deleteDeviceInEnvironments(id));
    // Eliminar Referencias a dispositivo en las habitaciones
    dispatch(deleteDevice(id));
    setIsModalOpen(false);
    navigate('/devices');
    console.log('Device Deleted');
  };
  const handleEditButton = () => {
    navigate(`/devices/edit/${id}`);
  };

  return (
    <StyledInfoDevice>
      <PageWrapper name='Devices'>
        {device !== undefined && <h4>{device.name}</h4>}
        {device !== undefined && (
          <small>
            <i>Id: {device.id}</i>
          </small>
        )}
        <div className='field'>
          <span className='field-property'>Room:</span>
          {room !== undefined && (
            <span className='field-value'>{room.name}</span>
          )}
        </div>
        <div className='field'>
          <span className='field-property'>Type:</span>
          {type !== undefined && (
            <span className='field-value'>{type.name}</span>
          )}
        </div>
        <div className='field'>
          <span className='field-property'>Status:</span>
          <span className='field-value'>
            {device !== undefined && (
              <ActivateButton
                isActive={device.status}
                onClick={handleStatusClick}
              />
            )}
          </span>
        </div>
        <EditAndDeleteButtons
          handleEdit={handleEditButton}
          handleDelete={handleDeleteButton}
        />
        <DeleteModal
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          handleDelete={handleDeleteDevice}
          message={`Se eliminará el Dispositivo y todas las referencias a este. ¿Desea continuar?`}
        />
      </PageWrapper>
    </StyledInfoDevice>
  );
};

export default InfoDevice;
