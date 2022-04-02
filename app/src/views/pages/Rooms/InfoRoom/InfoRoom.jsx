import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import StyledInfoRoom from './InfoRoom.styles';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ListDevices from '@components/layout/listItems/ListDevices/ListDevices';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import DeleteIcon from '@assets/delete.svg';
import EditIcon from '@assets/edit.svg';
import PlusIcon from '@assets/plus.svg';

const InfoRoom = ({ history }) => {
  const { id } = useParams();
  const room = useSelector((state) => {
    const roomSelected = state.rooms.find((room) => {
      return room.id === id;
    });
    const devicesList = [];
    roomSelected.devices.forEach((device) => {
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
  const handleClick = (deviceId) => {
    history.push(`/devices/info/${deviceId}`);
  };
  const handleEdit = () => {
    history.push(`/rooms/edit/${id}`);
  };
  const handleAddButton = () => {
    history.push('/devices/add');
  };
  const handleDelete = () => {
    alert('Eliminando Habitación y todos sus dispositivos');
  };
  return (
    <StyledInfoRoom>
      <PageWrapper name='Rooms' history={history}>
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
                  handleClick={() => handleClick(device.id)}
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
            onClick={handleDelete}
            className='button'
          />
        </div>
      </PageWrapper>
    </StyledInfoRoom>
  );
};
export default InfoRoom;
