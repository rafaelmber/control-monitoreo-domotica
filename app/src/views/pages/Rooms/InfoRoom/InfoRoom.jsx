import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { removeRoom } from '@/services/firebase';

import StyledInfoRoom from './InfoRoom.styles';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ListDevices from '@components/layout/listItems/ListDevices/ListDevices';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import DeleteIcon from '@assets/delete.svg';
import EditIcon from '@assets/edit.svg';
import PlusIcon from '@assets/plus.svg';
import DeleteModal from '@components/layout/modal/DeleteModal/DeleteModal';

const InfoRoom = () => {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();
  const room = useSelector((state) => {
    const roomSelected = state.rooms.find((room) => {
      return room.id === id;
    });
    const devicesList = [];
    roomSelected?.devices.forEach((device) => {
      let selectedDevice = state.devices.find((deviceState) => {
        return device.id === deviceState.id;
      });
      const newType = state.types.find((type) => {
        return type.id === selectedDevice.type;
      });
      const newDevice = { ...selectedDevice, type: newType };
      devicesList.push(newDevice);
    });
    const newRoomSelected = { ...roomSelected, devices: devicesList };
    return newRoomSelected;
  });

  const handleDeviceClick = (deviceId) => {
    history.push(`/devices/info/${deviceId}`);
  };
  const handleEdit = () => {
    history.push(`/rooms/edit/${id}`);
  };
  const handleAddButton = () => {
    history.push('/devices/add');
  };
  const handleDelete = async () => {
    //Loading
    await removeRoom(id);
    for (const device in room.devices) {
      dispatch({
        type: 'DELETE_DEVICE_IN_ENVIRONMENTS',
        payload: device,
      });
      dispatch({
        type: 'DELETE_DEVICE_IN_ROOMS',
        payload: {
          roomId: id,
          deviceId: device,
        },
      });
    }
    dispatch({
      type: 'DELETE_ROOM',
      payload: id,
    });
    history.push('/rooms');
  };
  const handleModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledInfoRoom>
      {room !== undefined && (
        <PageWrapper name='Rooms'>
          <h3>{room.name}</h3>
          <h5>Devices</h5>
          {room.devices.length !== 0 && (
            <ul className='list'>
              {room.devices.map((device) => {
                return (
                  <ListDevices
                    key={device.id}
                    name={device.name}
                    type={device.type}
                    handleClick={() => handleDeviceClick(device.id)}
                  />
                );
              })}
            </ul>
          )}
          {room.devices.length === 0 && <p>This Room does not have devices</p>}
          <ContextButton
            text='Add a new Device'
            Icon={PlusIcon}
            onClick={handleAddButton}
            className='button'
            bgColor='var(--dark-primary)'
            textColor='var(--lightest-neutral)'
          />
          <div className='buttons-list'>
            <ContextButton
              text='Edit'
              bgColor='var(--secundary)'
              textColor='var(--lightest-neutral)'
              Icon={EditIcon}
              onClick={handleEdit}
              className='button'
            />
            <ContextButton
              text='Delete'
              bgColor='var(--red)'
              textColor='var(--lightest-neutral)'
              Icon={DeleteIcon}
              onClick={handleModal}
              className='button'
            />
          </div>
          <DeleteModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            handleDelete={handleDelete}
            message={`Al eliminar esta Habitación se eliminarán todos los dispositivos que
          pertenecen a esta. ¿Desea continuar?`}
          />
        </PageWrapper>
      )}
    </StyledInfoRoom>
  );
};
export default InfoRoom;
