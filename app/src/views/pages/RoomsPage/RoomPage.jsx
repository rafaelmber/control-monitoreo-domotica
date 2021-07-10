import React from 'react';
import StyledRoomPage from './RoomPage.styles';
import Header from '@components/layout/header/Header';
import Card from '@components/cards/Card';
import Wrapper from '@components/layout/wrapper/Wrapper';
import roomsArray from '@/utils/data2';

const RoomPage = () => {
  return (
    <StyledRoomPage>
      <Wrapper>
        <Header className='header' text='Home' />
        <div className='content'>
          {roomsArray.map((room) => {
            return (
              <Card key={room.id} name={room.name} devices={room.devices} />
            );
          })}
        </div>
      </Wrapper>
    </StyledRoomPage>
  );
};

export default RoomPage;
