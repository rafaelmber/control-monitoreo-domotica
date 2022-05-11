import React from 'react';
import { useDispatch } from 'react-redux';

import StyledActivateAllModal from './ActivateAllModal.styles';
import { setDeviceStatusOnDB } from '@/services/firebase';
import { setDeviceStatus } from '@/store/devices/devices.actions';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import Modal from '../Modal';
import CloseIcon from '@assets/close.svg';

const ActivateAllModal = ({ isOpen, closeModal, name, devices }) => {
  const dispatch = useDispatch();
  const handleSetAll = (status) => {
    devices.forEach(async (device) => {
      await setDeviceStatusOnDB(device.id, status);
      dispatch(setDeviceStatus(device.id, status));
      closeModal();
    });
  };
  return (
    <Modal isOpen={isOpen}>
      <StyledActivateAllModal>
        <div onClick={closeModal} className='exit-button'>
          <CloseIcon className='exit-icon' />
        </div>
        <p>¿Desea encender o apagar todos los dispositivos de {name}?</p>
        <div className='buttons'>
          <ContextButton
            type='success'
            text='Encender todos'
            onClick={() => {
              handleSetAll(true);
            }}
          />
          <ContextButton
            type='danger'
            text='Apagar todos'
            onClick={() => {
              handleSetAll(false);
            }}
          />
        </div>
      </StyledActivateAllModal>
    </Modal>
  );
};

export default ActivateAllModal;
