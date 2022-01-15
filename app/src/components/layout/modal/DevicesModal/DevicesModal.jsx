import React from 'react';
import { useSelector } from 'react-redux';
import StyledDevicesModal from './DevicesModal.styles';
import Modal from '../Modal';

const DevicesModal = ({ isOpen, closeModal, selectDevice }) => {
  const devicesList = useSelector((state) => {
    return state.devices;
  });
  return (
    <StyledDevicesModal>
      <Modal isOpen={isOpen}>
        <input
          type='button'
          className='exit-button'
          value='Exit'
          onClick={closeModal}
        />
        <ul>
          {devicesList.map((device) => {
            return (
              <li
                key={device.id}
                onClick={() => {
                  selectDevice(device);
                }}
              >
                {device.name}
              </li>
            );
          })}
        </ul>
      </Modal>
    </StyledDevicesModal>
  );
};

export default DevicesModal;
