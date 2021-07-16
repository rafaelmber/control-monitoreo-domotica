import React from 'react';
import StyledActivateAllModal from './ActivateAllModal.styles';

import Modal from '../Modal';

const ActivateAllModal = ({
  isOpen,
  closeModal,
  name,
  handleSetAll,
  devices,
}) => {
  return (
    <StyledActivateAllModal>
      <Modal isOpen={isOpen}>
        <div onClick={closeModal} className='exit-button'>
          Exit
        </div>
        <p>¿Desea encender o apagar todos los dispositivos de {name}?</p>
        <div className='buttons'>
          <input
            type='button'
            className='turn-on'
            onClick={() => {
              handleSetAll(devices, true);
            }}
            value='Encender todos'
          />
          <input
            type='button'
            className='turn-off'
            onClick={() => {
              handleSetAll(devices, false);
            }}
            value='Apagar todos'
          />
        </div>
      </Modal>
    </StyledActivateAllModal>
  );
};

export default ActivateAllModal;
