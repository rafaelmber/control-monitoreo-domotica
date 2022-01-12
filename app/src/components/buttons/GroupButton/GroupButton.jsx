import React, { useState, useEffect } from 'react';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

const GroupButton = ({ devices, handleGroupClick }) => {
  const [groupStatus, setGroupStatus] = useState(0);

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
  return (
    <>
      <ActivateButton
        isActive
        groupStatus={groupStatus}
        onClick={handleGroupClick}
      />
    </>
  );
};

export default GroupButton;
