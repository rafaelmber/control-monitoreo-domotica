//Dependencias
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Recursos
import StyledRoomMain from './RoomMain.styles';
import Header from '@components/layout/header/Header';
import DevicesCard from '@components/cards/devicesCard/DevicesCard';
import MainWrapper from '@components/layout/wrapper/MainWrapper/MainWrapper';
import db from '@/services/firebase';
import Loading from '@components/layout/loading/Loading';

const options = [{ id: 1, title: 'Add Device', path: '/rooms/add' }];

const RoomMain = () => {
  const [loading, setLoading] = useState(false);
  //Se leen los dispositivos por habitación del Store central
  const dispatch = useDispatch();
  const rooms = useSelector((state) => {
    let roomsArray = [];
    state.rooms.forEach((room) => {
      const deviceByRoom = state.devices.filter((device) => {
        return room.id === device.room;
      });
      const newRoom = { ...room, devices: deviceByRoom };
      roomsArray.push(newRoom);
    });
    return roomsArray;
  });
  //Se cargan las habitaciones desde Firebase y se almacenan en el Store central
  useEffect(() => {
    setLoading(true);
    db.ref('rooms/').once('value', (snapshot) => {
      dispatch({
        type: 'GET_ROOMS',
        payload: snapshot.val(),
      });
      setLoading(false);
    });
  }, [dispatch]);
  return (
    <StyledRoomMain>
      <MainWrapper>
        <Header className='header' text='Home' options={options} />
        {loading && <Loading />}
        {!loading && (
          <div className='content'>
            {/*
          Por cada habitación se genera una tarjeta en la que se van a mostrar
          los dispotivos de dicha habitación
          */}
            {rooms.length > 0 &&
              rooms.map((room) => {
                return <DevicesCard key={room.id} {...room} />;
              })}
          </div>
        )}
      </MainWrapper>
    </StyledRoomMain>
  );
};

export default RoomMain;
