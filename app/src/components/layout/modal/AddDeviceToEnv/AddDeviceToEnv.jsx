import React from 'react';

import StyledAddDeviceToEnv from './AddDeviceToEnv.styles';
import Modal from '../Modal';
import ListDevices from '../../listItems/ListDevices/ListDevices';

import CloseIcon from '@assets/close.svg';

const AddDeviceToEnv = ({ isOpen, closeModal, devices, handleClickDevice }) => {
  return (
    <StyledAddDeviceToEnv>
      <Modal isOpen={isOpen}>
        <div className='exit-button'>
          <CloseIcon className='icon' onClick={closeModal} />
        </div>
        <div className='content-list'>
          {devices.map((device) => {
            return (
              <ListDevices
                key={device.id}
                name={device.name}
                type={device.type}
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
