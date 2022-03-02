import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StyledCard from './Card.styles';
import ActivateButton from '../buttons/ActivateButton/ActivateButton';
import ContentWrapper from '../layout/wrapper/ContentWrapper/ContentWrapper';

const Card = ({ id, name, handleClick, devices, devicesList }) => {
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
    <ContentWrapper>
      <StyledCard onClick={handleClick} isActive={isActive}>
        <h4>
          <Link to={`/info/enviroments/${id}`} className='link'>
            {name}
          </Link>
        </h4>
        <ActivateButton isActive={isActive} className='indicator' />
      </StyledCard>
    </ContentWrapper>
  );
};

export default Card;
