import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import StyledInfoRoom from './InfoRoom.styles';

import ContentWrapper from '@components/layout/wrapper/ContentWrapper/ContentWrapper';
import Wrapper from '@components/layout/wrapper/Wrapper';
import HeaderBackButton from '@components/layout/HeaderBackButton/HeaderBackButton';
const InfoRoom = ({ history }) => {
  const { id } = useParams();
  const room = useSelector((state) => {
    return state.rooms.find((room) => {
      return room.id === id;
    });
  });
  console.log(room);

  const handleBack = () => {
    history.goBack();
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
            <h4>Devices</h4>
          </ContentWrapper>
        </div>
      </Wrapper>
    </StyledInfoRoom>
  );
};
export default InfoRoom;
