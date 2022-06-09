import React from 'react';

import StyledEditAndDeleteButtons from './EditAndDeleteButtons.styles';
import ContextButton from '@components/buttons/ContextButton/ContextButton';

import EditIcon from '@assets/edit.svg';
import DeleteIcon from '@assets/delete.svg';

const EditAndDeleteButtons = ({ handleEdit, handleDelete }) => {
  return (
    <StyledEditAndDeleteButtons>
      <ContextButton
        text='Edit'
        type='secundary'
        Icon={EditIcon}
        onClick={handleEdit}
      />
      <ContextButton
        text='Delete'
        type='danger'
        Icon={DeleteIcon}
        onClick={handleDelete}
      />
    </StyledEditAndDeleteButtons>
  );
};

export default EditAndDeleteButtons;
