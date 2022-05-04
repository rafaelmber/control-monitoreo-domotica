import React from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../Modal';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import CloseIcon from '@assets/close.svg';

const OptionsModal = ({ isOpen, closeModal, options }) => {
  const navigate = useNavigate();

  const handleOptionPath = (path) => {
    navigate(path);
  };

  return (
    <Modal isOpen={isOpen}>
      <button className='exit-button' onClick={closeModal}>
        <CloseIcon className='exit-icon' />
      </button>
      {options.map((option) => {
        return (
          <ContextButton
            key={option.id}
            text={option.title}
            Icon={option.Icon}
            onClick={() => {
              handleOptionPath(option.path);
            }}
          />
        );
      })}
    </Modal>
  );
};

export default OptionsModal;
