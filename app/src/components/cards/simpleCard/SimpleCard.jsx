import React, { useState, useEffect } from 'react';
import StyledSimpleCard from './SimpleCard.styles';

const SimpleCard = ({ name, handleClick, devices, devicesList }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const matchDevices = [];
    for (const device of Object.entries(devices)) {
      const actualDevice = devicesList.find((devList) => {
        return devList.id === device[0] && devList.status === device[1];
      });
      if (actualDevice !== undefined) {
        matchDevices.push(actualDevice);
      }
    }
    if (Object.entries(devices).length === matchDevices.length) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [devicesList]);

  return (
    <StyledSimpleCard onClick={handleClick} isActive={isActive}>
      <h4>{name}</h4>
      {isActive && <div className='indicator'></div>}
    </StyledSimpleCard>
  );
};

export default SimpleCard;
