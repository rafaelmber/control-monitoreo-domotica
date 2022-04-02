import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import TextField from '@components/forms/TextField/TextField';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import SaveIcon from '@assets/save.svg';
import db from '@/services/firebase';

const EditRoom = ({ history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const room = useSelector((state) => {
    return state.rooms.find((room) => {
      return room.id === id;
    });
  });

  const [name, setName] = useState(room.name);

  const handleSave = async (e) => {
    e.preventDefault();
    if (name === '') {
      alert('El nombre no puede estar vacio');
    } else {
      try {
        const ref = db.ref('rooms/' + id);
        await ref.update({ name: name });
        const newRoom = { ...room, name: name };
        dispatch({
          type: 'EDIT_ROOM',
          payload: newRoom,
        });
        console.log('Saved');
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInput = (e) => {
    setName(e.target.value);
  };
  return (
    <PageWrapper name='Rooms' history={history}>
      <form>
        <TextField
          value={name}
          onChange={handleInput}
          name='name'
          placeholder='Enter Room name'
          label='Name'
        />
        <div className='one-button'>
          <ContextButton
            onClick={handleSave}
            bgColor='var(--green)'
            status
            text='Save'
            Icon={SaveIcon}
          />
        </div>
      </form>
    </PageWrapper>
  );
};

export default EditRoom;
