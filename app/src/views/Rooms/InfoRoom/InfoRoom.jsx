import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { removeRoom } from '@/services/firebase';
import { deleteDeviceInEnvironments } from '@/store/environments/environments.actions';
import { deleteDevice } from '@/store/devices/devices.actions';
import { deleteRoom } from '@/store/rooms/rooms.actions';

import StyledInfoRoom from './InfoRoom.styles';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import DevicesList from '@components/layout/DevicesList/DevicesList';
import EditAndDeleteButtons from '@components/forms/EditAndDeleteButtons/EditAndDeleteButtons';

import ContextButton from '@components/buttons/ContextButton/ContextButton';
import DeleteModal from '@components/layout/modal/DeleteModal/DeleteModal';
import PlusIcon from '@assets/plus.svg';

const InfoRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = useSelector((state) => {
    const roomSelected = state.rooms.find((stateRoom) => {
      return stateRoom.id == id;
    });
    return roomSelected;
  });
  const devices = useSelector((state) => {
    const roomDevices = state.devices.filter((device) => {
      return device.room === id;
    });
    return roomDevices;
  });

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDevice = () => {
    navigate('/devices/add');
  };
  const handleEditRoom = () => {
    navigate(`/rooms/edit/${id}`);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteRoom = async () => {
    await removeRoom(id);
    devices.forEach((device) => {
      dispatch(deleteDeviceInEnvironments(device.id));
      dispatch(deleteDevice(device.id));
    });
    dispatch(deleteRoom(id));
    navigate('/');
  };

  return (
    <PageWrapper name='Rooms'>
      <StyledInfoRoom>
        <h4 className='room__header'>{room?.name}</h4>
        <small className='room__id'>Id: {room?.id}</small>
        <h5>Devices</h5>
        {devices?.length !== 0 && (
          <ul className='devices-list'>
            {devices.map((device) => {
              return (
                <DevicesList
                  key={device.id}
                  id={device.id}
                  name={device.name}
                  type={device.type}
                />
              );
            })}
          </ul>
        )}
        <ContextButton
          type='primary'
          text='Add a new Device'
          Icon={PlusIcon}
          onClick={handleAddDevice}
        />
        <EditAndDeleteButtons
          handleEdit={handleEditRoom}
          handleDelete={handleOpenModal}
        />
      </StyledInfoRoom>
      <DeleteModal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        handleDelete={handleDeleteRoom}
        message={`Al eliminar esta Habitación se eliminarán todos los dispositivos que pertenecen a esta. ¿Desea continuar?`}
      />
    </PageWrapper>
  );
};
export default InfoRoom;
