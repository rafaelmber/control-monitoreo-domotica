import React, { useState } from 'react';

import StyledRoomForm from './RoomForm.styles';
import TextField from '../TextField/TextField';
import ContextButton from '@components/buttons/ContextButton/ContextButton';

import SaveIcon from '@assets/save.svg';

const RoomForm = ({ name, sendData }) => {
  const [roomName, setRoomName] = useState(name || '');
  console.log('Room name', roomName);

  const handleChange = (event) => {
    setRoomName(event.target.value);
  };
  const handleClick = async (event) => {
    event.preventDefault();
    if (roomName === '') {
      console.log('La habitación debe tener un nombre');
    } else {
      await sendData(roomName);
    }
  };

  return (
    <StyledRoomForm>
      <TextField
        value={roomName}
        onChange={handleChange}
        name='name'
        placeholder='Enter the Name of the Room'
        label='Name'
        type='text'
      />
      <ContextButton
        text='Save'
        type='success'
        Icon={SaveIcon}
        onClick={handleClick}
      />
    </StyledRoomForm>
  );
};

export default RoomForm;
