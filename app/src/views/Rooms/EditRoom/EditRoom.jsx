import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import TextField from '@components/forms/TextField/TextField';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import SaveIcon from '@assets/save.svg';
import db from '@/services/firebase';
import { editRoom } from '@/store/rooms/rooms.actions';

const EditRoom = () => {
  const navigate = useNavigate();
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
        const ref = db.ref('systems/system_1/rooms/' + id);
        await ref.update({ name: name });
        const newRoom = { ...room, name: name };
        dispatch(editRoom(newRoom));
        console.log('Saved');
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInput = (e) => {
    setName(e.target.value);
  };
  return (
    <PageWrapper name='Rooms'>
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
            text='Save'
            textColor='var(--lightest-neutral)'
            Icon={SaveIcon}
          />
        </div>
      </form>
    </PageWrapper>
  );
};

export default EditRoom;