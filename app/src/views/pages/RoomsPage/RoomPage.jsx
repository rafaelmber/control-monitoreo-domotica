//Dependencias
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Recursos
import StyledRoomPage from './RoomPage.styles';
import Header from '@components/layout/header/Header';
import Card from '@components/cards/Card';
import Wrapper from '@components/layout/wrapper/Wrapper';
import db from '@/services/firebase';
import Loading from '@components/layout/loading/Loading';

const RoomPage = () => {
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
    <StyledRoomPage>
      <Wrapper>
        <Header className='header' text='Home' />
        {loading && <Loading />}
        {!loading && (
          <div className='content'>
            {/*
          Por cada habitación se genera una tarjeta en la que se van a mostrar
          los dispotivos de dicha habitación
          */}
            {rooms.length > 0 &&
              rooms.map((room) => {
                return <Card key={room.id} {...room} />;
              })}
          </div>
        )}
      </Wrapper>
    </StyledRoomPage>
  );
};

export default RoomPage;
