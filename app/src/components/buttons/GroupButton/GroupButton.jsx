import React, { useState, useEffect } from 'react';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';
import ActivateAllModal from '@components/layout/modal/ActiveAllModel/ActivateAllModal';

const GroupButton = ({ devices, name }) => {
  const [groupStatus, setGroupStatus] = useState(null);
  const [groupButton, setGroupButton] = useState(false);

  useEffect(() => {
    handleGroupStatus();
  }, [devices]);

  const handleGroupStatus = () => {
    if (
      devices.every((device) => {
        return device.status === false;
      })
    ) {
      setGroupStatus(false);
    } else if (
      devices.every((device) => {
        return device.status === true;
      })
    ) {
      setGroupStatus(true);
    } else {
      setGroupStatus(null);
    }
  };
  const handleGroupClick = () => {
    setGroupButton(true);
  };

  const handleCloseModal = () => {
    setGroupButton(false);
  };
  return (
    <>
      <ActivateButton isActive={groupStatus} onClick={handleGroupClick} />
      <ActivateAllModal
        isOpen={groupButton}
        closeModal={handleCloseModal}
        name={name}
        devices={devices}
        setGroupButton={setGroupButton}
      />
    </>
  );
};
export default GroupButton;
