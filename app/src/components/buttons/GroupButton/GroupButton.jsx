import React, { useState, useEffect } from 'react';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';
import ActivateAllModal from '@components/layout/modal/ActiveAllModel/ActivateAllModal';

const GroupButton = ({ devices, name }) => {
  const [groupStatus, setGroupStatus] = useState(0);
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
      setGroupStatus(0);
    } else if (
      devices.every((device) => {
        return device.status === true;
      })
    ) {
      setGroupStatus(2);
    } else {
      setGroupStatus(1);
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
      <ActivateButton groupStatus={groupStatus} onClick={handleGroupClick} />
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
