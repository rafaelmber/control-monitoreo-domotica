import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledRoomPage from './RoomPage.styles';
import Header from '@components/layout/header/Header';
import Card from '@components/cards/Card';
import Wrapper from '@components/layout/wrapper/Wrapper';
import db from '@/services/firebase';

const RoomPage = () => {
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

  useEffect(() => {
    db.ref('rooms/').once('value', (snapshot) => {
      dispatch({
        type: 'GET_ROOMS',
        payload: snapshot.val(),
      });
    });
  }, [dispatch]);
  return (
    <StyledRoomPage>
      <Wrapper>
        <Header className='header' text='Home' />
        <div className='content'>
          {rooms.length > 0 &&
            rooms.map((room) => {
              return <Card key={room.id} {...room} />;
            })}
        </div>
      </Wrapper>
    </StyledRoomPage>
  );
};

export default RoomPage;
