import React, { useState } from 'react';

import ContextButton from '@components/buttons/ContextButton/ContextButton';
import AddDeviceToEnv from '@components/layout/modal/AddDeviceToEnv/AddDeviceToEnv';
import PlusIcon from '@assets/plus.svg';

const SelectDevices = ({ devices, selectDevice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSelectDevice = (deviceId) => {
    console.log(deviceId);
    selectDevice(deviceId);
    setIsModalOpen(false);
  };

  return (
    <>
      {devices.length !== 0 && (
        <ContextButton
          type='primary'
          text='Add a Device into this Environment'
          Icon={PlusIcon}
          onClick={handleOpenModal}
        />
      )}
      <AddDeviceToEnv
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        devices={devices}
        handleClickDevice={handleSelectDevice}
      />
    </>
  );
};

export default SelectDevices;
