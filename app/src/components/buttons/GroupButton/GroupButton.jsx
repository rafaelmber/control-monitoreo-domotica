// import ActivateAllModal from '../../layout/modal/ActiveAllModel/ActivateAllModal';
import React, { useState, useEffect } from 'react';

import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';
import ActivateAllModal from '@components/layout/modal/ActiveAllModel/ActivateAllModal';

const GroupButton = ({ devices, name }) => {
  const [groupStatus, setGroupStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    handleGroupStatus();
  }, [devices]);

  const handleGroupStatus = () => {
    const allDevicesInactive = devices.every((device) => {
      return device.status === false;
    });
    const allDevicesActive = devices.every((device) => {
      return device.status === true;
    });

    if (allDevicesActive) {
      setGroupStatus(true);
    } else if (allDevicesInactive) {
      setGroupStatus(false);
    } else {
      setGroupStatus(null);
    }
  };
  const handleGroupClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ActivateButton isActive={groupStatus} onClick={handleGroupClick} />
      <ActivateAllModal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        name={name}
        devices={devices}
      />
    </>
  );
};
export default GroupButton;
