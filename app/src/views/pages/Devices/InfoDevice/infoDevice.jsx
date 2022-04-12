import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import db, { removeDevice } from '@/services/firebase';

import StyledInfoDevice from './InfoDevice.styles';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import DeleteModal from '@components/layout/modal/DeleteModal/DeleteModal';

import DeleteIcon from '@assets/delete.svg';

const InfoDevice = ({ history }) => {
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
    const deviceRef = db.ref('devices/' + id);
    await deviceRef.update({ status: !device.status });
    dispatch({
      type: 'SET_DEVICE_STATUS',
      payload: id,
    });
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
    dispatch({
      type: 'DELETE_DEVICE_IN_ENVIRONMENTS',
      payload: id,
    });
    dispatch({
      type: 'DELETE_DEVICE_IN_ROOMS',
      payload: { deviceId: id, roomId: room.id },
    });
    // Eliminar Referencias a dispositivo en las habitaciones
    dispatch({
      type: 'DELETE_DEVICE',
      payload: id,
    });
    setIsModalOpen(false);
    history.push('/devices');
    console.log('Device Deleted');
  };

  return (
    <StyledInfoDevice>
      <PageWrapper name='Devices' history={history}>
        {device !== undefined && <h4>{device.name}</h4>}
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
        <div className='buttons'>
          <ContextButton
            text='Delete'
            textColor='var(--lightest-neutral)'
            bgColor='var(--red)'
            Icon={DeleteIcon}
            onClick={handleDeleteButton}
          />
        </div>
        <DeleteModal
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          handleDelete={handleDeleteDevice}
          message={`Se eliminará el Dispisitivo y todas las referencias a este. ¿Desea continuar?`}
        />
      </PageWrapper>
    </StyledInfoDevice>
  );
};

export default InfoDevice;
