import React, { useState } from 'react';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import SaveIcon from '@assets/save.svg';

const AddRoom = ({ history }) => {
  const handleSubmit = () => {
    console.log('Saved');
  };
  return (
    <PageWrapper name='Rooms' history={history}>
      <div className='one-button'>
        <ContextButton
          text='Save'
          status
          Icon={SaveIcon}
          onClick={handleSubmit}
        />
      </div>
    </PageWrapper>
  );
};

export default AddRoom;
