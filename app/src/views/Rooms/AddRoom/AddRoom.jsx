import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRoom } from '@/store/rooms/rooms.actions';
import { setRoom } from '@/services/firebase';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import RoomForm from '@components/forms/RoomForm/RoomForm';

import hasCreator from '@/utils/hashCreator';

const AddRoom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => {
    return state.rooms;
  });

  const sendData = async (name) => {
    try {
      const id = hasCreator('room', rooms);
      const newRoom = {
        id: id,
        name: name,
        devices: [],
      };
      await setRoom(newRoom);

      dispatch(addRoom(newRoom));
      navigate(`/rooms/info/${newRoom.id}`);
      console.log('Done');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageWrapper name='Rooms'>
      <RoomForm sendData={sendData} />
    </PageWrapper>
  );
};

export default AddRoom;
