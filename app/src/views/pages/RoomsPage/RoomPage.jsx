import React from 'react';
import StyledRoomPage from './RoomPage.styles';
import Card from '@components/cards/Card';
import roomsArray from '@/utils/data2';

const RoomPage = () => {
  return (
    <StyledRoomPage>
      {roomsArray.map((room) => {
        return <Card key={room.id} name={room.name} devices={room.devices} />;
      })}
    </StyledRoomPage>
  );
};

export default RoomPage;
