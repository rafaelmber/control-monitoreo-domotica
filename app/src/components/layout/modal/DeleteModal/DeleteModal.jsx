import React from 'react';
import StyledDeleteModal from './DeleteModal.styles';
import Modal from '../Modal';
import CloseIcon from '@assets/close.svg';
import DeleteIcon from '@assets/delete.svg';
import ContextButton from '@components/buttons/ContextButton/ContextButton';

const DeleteModal = ({ isOpen, closeModal, handleDelete, message }) => {
  return (
    <StyledDeleteModal>
      <Modal isOpen={isOpen}>
        <div className='exit-button' onClick={closeModal}>
          <CloseIcon className='exit-icon' />
        </div>
        <p>{message}</p>
        <div className='buttons'>
          <ContextButton
            text='Cancel'
            bgColor='var(--lightest-primary)'
            textColor='var(--neutral)'
            onClick={closeModal}
          />
          <ContextButton
            text='Delete'
            bgColor='var(--red)'
            textColor='var(--lightest-neutral)'
            Icon={DeleteIcon}
            onClick={handleDelete}
          />
        </div>
      </Modal>
    </StyledDeleteModal>
  );
};

export default DeleteModal;
