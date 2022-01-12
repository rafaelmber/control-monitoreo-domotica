import React from 'react';
import StyledMoreButtonModal from './ModeButtonModal.styles';
import Modal from '../Modal';

const MoreButtonModal = ({ isOpen, closeModal }) => {
  return (
    <StyledMoreButtonModal>
      <Modal isOpen={isOpen}>
        <div onClick={closeModal} className='exit-button'>
          Exit
        </div>
      </Modal>
    </StyledMoreButtonModal>
  );
};

export default MoreButtonModal;
