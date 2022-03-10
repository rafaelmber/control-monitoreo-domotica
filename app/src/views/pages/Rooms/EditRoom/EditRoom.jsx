import React from 'react';
import { useParams } from 'react-router-dom';
import StyledEditRoom from './EditRoom.styles';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import SaveIcon from '@assets/save.svg';

const EditRoom = ({ history }) => {
  const { id } = useParams();

  const handleSave = () => {
    console.log('Saved');
  };
  return (
    <StyledEditRoom>
      <PageWrapper name='Rooms' history={history}>
        {id}
        <div className='save-button'>
          <ContextButton
            onClick={handleSave}
            status
            text='Save'
            Icon={SaveIcon}
          />
        </div>
      </PageWrapper>
    </StyledEditRoom>
  );
};

export default EditRoom;
