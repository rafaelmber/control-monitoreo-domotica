//Dependencias
import React from 'react';
import { useSelector } from 'react-redux';

//Recursos
import DevicesCard from '@components/cards/devicesCard/DevicesCard';
import MainWrapper from '@components/layout/wrapper/MainWrapper/MainWrapper';
import AddIcon from '@assets/plus.svg';

const options = [
  { id: 1, title: 'Add Room', path: '/rooms/add', Icon: AddIcon },
];

const RoomMain = () => {
  const rooms = useSelector((state) => {
    const roomsList = state.rooms.map((room) => {
      const devices = state.devices.filter((device) => {
        return device.room === room.id;
      });
      const newRoom = { ...room, devices: devices };
      return newRoom;
    });
    return roomsList;
  });

  return (
    <MainWrapper title='Rooms' optionsList={options}>
      {/*
        Por cada habitación se genera una tarjeta en la que se van a mostrar
        los dispotivos de dicha habitación
      */}
      {rooms.length === 0 && <p>No hay Habitaciones</p>}
      {rooms.length > 0 &&
        rooms.map((room) => {
          return <DevicesCard key={room.id} {...room} />;
        })}
    </MainWrapper>
  );
};

export default RoomMain;
