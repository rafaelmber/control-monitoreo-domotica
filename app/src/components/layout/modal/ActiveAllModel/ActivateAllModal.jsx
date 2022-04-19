import React from 'react';
import StyledActivateAllModal from './ActivateAllModal.styles';
import { useDispatch } from 'react-redux';
import db from '@/services/firebase';
import Modal from '../Modal';

const ActivateAllModal = ({
  isOpen,
  closeModal,
  name,
  devices,
  setGroupButton,
}) => {
  const dispatch = useDispatch();
  const handleSetAll = (devices, status) => {
    devices.forEach(async (device) => {
      const deviceReference = db.ref(`/systems/system_1/devices/${device.id}/`);
      await deviceReference.update({ status: status });
      dispatch({
        type: 'SET_DEVICES_STATUS',
        payload: device.id,
      });
      setGroupButton(false);
    });
  };
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
