import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import StyledEditRoom from './EditRoom.styles';
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
  };

  const handleInput = (e) => {
    setName(e.target.value);
  };
  return (
    <StyledEditRoom>
      <PageWrapper name='Rooms' history={history}>
        <form>
          <TextField value={name} onChange={handleInput} name='name' />
          <div className='save-button'>
            <ContextButton
              onClick={handleSave}
              status
              text='Save'
              Icon={SaveIcon}
            />
          </div>
        </form>
      </PageWrapper>
    </StyledEditRoom>
  );
};

export default EditRoom;
