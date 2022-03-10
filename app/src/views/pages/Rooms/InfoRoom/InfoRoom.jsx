import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import StyledInfoRoom from './InfoRoom.styles';

import ContentWrapper from '@components/layout/wrapper/ContentWrapper/ContentWrapper';
import Wrapper from '@components/layout/wrapper/Wrapper';
import HeaderBackButton from '@components/layout/HeaderBackButton/HeaderBackButton';
import ListDevices from '@components/layout/listItems/ListDevices/ListDevices';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import DeleteIcon from '@assets/delete.svg';
import EditIcon from '@assets/edit.svg';

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

  const handleBack = () => {
    history.goBack();
  };
  const handleClick = (deviceId) => {
    history.push(`/devices/info/${deviceId}`);
  };
  const handleEdit = () => {
    history.push(`/rooms/edit/${id}`);
  };
  const handleDelete = () => {
    alert('Eliminando Habitación y todos sus dispositivos');
  };
  return (
    <StyledInfoRoom>
      <Wrapper>
        <HeaderBackButton
          text='Rooms'
          className='header'
          handleClick={handleBack}
          options={[]}
        />
        <div className='content'>
          <ContentWrapper>
            <h3>{room.name}</h3>
            <h5>Devices</h5>
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
            <div className='buttons-list'>
              <ContextButton
                text='Edit'
                status
                Icon={EditIcon}
                onClick={handleEdit}
                className='button'
              />
              <ContextButton
                text='Delete'
                Icon={DeleteIcon}
                onClick={handleDelete}
                className='button'
              />
            </div>
          </ContentWrapper>
        </div>
      </Wrapper>
    </StyledInfoRoom>
  );
};
export default InfoRoom;
