//Dependencias
import React from 'react';
import { useSelector } from 'react-redux';

//Recursos
import StyledRoomMain from './RoomMain.styles';
import Header from '@components/layout/header/Header';
import DevicesCard from '@components/cards/devicesCard/DevicesCard';
import MainWrapper from '@components/layout/wrapper/MainWrapper/MainWrapper';

const options = [{ id: 1, title: 'Add Room', path: '/rooms/add' }];

const RoomMain = () => {
  //Se leen los dispositivos por habitación del Store central
  const rooms = useSelector((state) => {
    let roomsArray = state.rooms.map((room) => {
      const devicesByRoom = state.devices.filter((device) => {
        return room.id === device.room;
      });
      const newRoom = { ...room, devices: devicesByRoom };
      return newRoom;
    });
    return roomsArray;
  });

  return (
    <StyledRoomMain>
      <MainWrapper>
        <Header className='header' text='Home' options={options} />
        {
          <div className='content'>
            {/*
          Por cada habitación se genera una tarjeta en la que se van a mostrar
          los dispotivos de dicha habitación
          */}
            {rooms.length === 0 && <p>No hay Habitaciones</p>}
            {rooms.length > 0 &&
              rooms.map((room) => {
                return <DevicesCard key={room.id} {...room} />;
              })}
          </div>
        }
      </MainWrapper>
    </StyledRoomMain>
  );
};

export default RoomMain;
