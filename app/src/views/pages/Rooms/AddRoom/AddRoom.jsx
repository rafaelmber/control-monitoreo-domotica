import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import db from '@/services/firebase';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import SaveIcon from '@assets/save.svg';
import TextField from '@components/forms/TextField/TextField';
import hasCreator from '@/utils/hashCreator';

const AddRoom = ({ history }) => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => {
    return state.rooms;
  });
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '') {
      alert('El nombre no puede estar vacio');
    } else {
      try {
        const id = hasCreator(rooms);
        const newRoom = {
          id: id,
          name: name,
          devices: [],
        };
        const ref = db.ref('rooms/' + newRoom.id);
        await ref.set({
          name: newRoom.name,
          devices: newRoom.devices,
        });

        dispatch({
          type: 'ADD_ROOM',
          payload: newRoom,
        });
        history.push(`/rooms/info/${newRoom.id}`);
        console.log('Done');
      } catch (error) {
        console.log(error);
      }
    }
    console.log('Saved');
  };
  return (
    <PageWrapper name='Rooms' history={history}>
      <form>
        <TextField
          value={name}
          onChange={handleChange}
          name='name'
          label='Name'
          placeholder='Enter Room name'
        />
        <div className='one-button'>
          <ContextButton
            text='Save'
            status
            Icon={SaveIcon}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </PageWrapper>
  );
};

export default AddRoom;
