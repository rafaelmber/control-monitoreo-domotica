import React from 'react';
import StyledMoreButtonModal from './MoreButtonModal.styles';
import Modal from '../Modal';
import MoreButtonItem from '@components/layout/listItems/MoreButtonItem/MoreButtonItem';
import CloseIcon from '@assets/close.svg';
const MoreButtonModal = ({ isOpen, closeModal, options }) => {
  return (
    <StyledMoreButtonModal>
      <Modal isOpen={isOpen}>
        <div onClick={closeModal} className='exit-button'>
          <CloseIcon className='icon' />
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
