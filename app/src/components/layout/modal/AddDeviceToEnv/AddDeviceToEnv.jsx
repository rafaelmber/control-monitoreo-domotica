import React from 'react';

import StyledAddDeviceToEnv from './AddDeviceToEnv.styles';
import Modal from '../Modal';
import DevicesList from '../../DevicesList/DevicesList';

import CloseIcon from '@assets/close.svg';

const AddDeviceToEnv = ({ isOpen, closeModal, devices, handleClickDevice }) => {
  return (
    <StyledAddDeviceToEnv>
      <Modal isOpen={isOpen}>
        <div className='exit-button'>
          <CloseIcon className='exit-icon' onClick={closeModal} />
        </div>
        <div className='content-list'>
          {devices.map((device) => {
            return (
              <DevicesList
                key={device.id}
                id={device.id}
                name={device.name}
                type={device.type}
                room={device.room}
                handleClick={() => {
                  handleClickDevice(device.id);
                }}
              />
            );
          })}
        </div>
      </Modal>
    </StyledAddDeviceToEnv>
  );
};

export default AddDeviceToEnv;
