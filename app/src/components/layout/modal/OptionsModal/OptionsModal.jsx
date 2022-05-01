import React from 'react';
import { useNavigate } from 'react-router-dom';

import StyledOptionsModal from './OptionsModal.styles';
import Modal from '../Modal';

import CloseIcon from '@assets/close.svg';

import ContextButton from '@components/buttons/ContextButton/ContextButton';

const OptionsModal = ({ isOpen, closeModal, options }) => {
  const navigate = useNavigate();

  const handleOptionPath = (path) => {
    navigate(path);
  };

  return (
    <StyledOptionsModal>
      <Modal isOpen={isOpen}>
        <button className='exit-button' onClick={closeModal}>
          <CloseIcon className='exit-icon' />
        </button>
        {options.map((option) => {
          return (
            <ContextButton
              key={option.id}
              text={option.title}
              bgColor='var(--lightest-primary)'
              textColor='var(--neutral)'
              Icon={option.Icon}
              onClick={() => {
                handleOptionPath(option.path);
              }}
            />
          );
        })}
      </Modal>
    </StyledOptionsModal>
  );
};

export default OptionsModal;