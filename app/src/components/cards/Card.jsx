import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StyledCard from './Card.styles';
import ActivateButton from '../buttons/ActivateButton/ActivateButton';
import ContentWrapper from '../layout/wrapper/ContentWrapper/ContentWrapper';

const Card = ({ id, name, handleClick, devicesList, devices }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    handleIndicator();
  }, [devicesList]);

  const handleIndicator = () => {
    let match = 0;
    devices.forEach((envDevice) => {
      devicesList.forEach((curDevice) => {
        if (
          envDevice.id === curDevice.id &&
          envDevice.status === curDevice.status
        ) {
          match++;
        }
      });
    });
    if (match === devices.length) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <ContentWrapper>
      <StyledCard>
        <h4 className='title'>
          {/*

           */}
          <Link to={`/environments/info/${id}`} className='link'>
            {name}
          </Link>
        </h4>
        <ActivateButton
          isActive={isActive}
          onClick={handleClick}
          className='indicator'
        />
      </StyledCard>
    </ContentWrapper>
  );
};

export default Card;
