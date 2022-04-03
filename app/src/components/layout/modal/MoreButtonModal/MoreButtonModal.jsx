import React from 'react';
import StyledMoreButtonModal from './MoreButtonModal.styles';
import Modal from '../Modal';
import MoreButtonItem from '@components/layout/listItems/MoreButtonItem/MoreButtonItem';

const MoreButtonModal = ({ isOpen, closeModal, options }) => {
  return (
    <StyledMoreButtonModal>
      <Modal isOpen={isOpen}>
        <div onClick={closeModal} className='exit-button'>
          Exit
        </div>
        {options.map((option) => {
          return (
            <MoreButtonItem
              key={option.id}
              title={option.title}
              path={option.path}
            />
          );
        })}
      </Modal>
    </StyledMoreButtonModal>
  );
};

export default MoreButtonModal;
