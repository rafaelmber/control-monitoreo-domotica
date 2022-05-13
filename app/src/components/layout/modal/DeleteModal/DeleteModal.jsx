import React from 'react';
import StyledDeleteModal from './DeleteModal.styles';
import Modal from '../Modal';
import CloseIcon from '@assets/close.svg';
import DeleteIcon from '@assets/delete.svg';
import ContextButton from '@components/buttons/ContextButton/ContextButton';

const DeleteModal = ({ isOpen, closeModal, handleDelete, message }) => {
  return (
    <Modal isOpen={isOpen}>
      <StyledDeleteModal>
        <div className='exit-button' onClick={closeModal}>
          <CloseIcon className='exit-icon' />
        </div>
        <p>{message}</p>
        <div className='buttons'>
          <ContextButton text='Cancel' onClick={closeModal} />
          <ContextButton
            text='Delete'
            type='danger'
            Icon={DeleteIcon}
            onClick={handleDelete}
          />
        </div>
      </StyledDeleteModal>
    </Modal>
  );
};

export default DeleteModal;
