import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateRoom } from '@/services/firebase';
import { editRoom } from '@/store/rooms/rooms.actions';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import RoomForm from '@components/forms/RoomForm/RoomForm';

const EditRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const room = useSelector((state) => {
    return state.rooms.find((room) => {
      return room.id === id;
    });
  });

  const saveData = async (name) => {
    try {
      await updateRoom(id, name);
      const newRoom = { ...room, name: name };
      dispatch(editRoom(newRoom));
      console.log('Saved');
      navigate(`/rooms/info/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageWrapper name='Rooms'>
      <RoomForm name={room.name} sendData={saveData} />
    </PageWrapper>
  );
};

export default EditRoom;
