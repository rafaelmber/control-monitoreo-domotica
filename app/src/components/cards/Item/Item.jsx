import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StyledItem from './Item.styles';
import db from '@/services/firebase';
import { setDeviceStatus } from '@/store/devices/devices.actions';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

//import OutletIcon from '@assets/outlet.svg';
//import BulbIcon from '@assets/bulb.svg';

const Item = ({
  Icon,
  id,
  name,
  isActive,
  isGroup,
  groupStatus,
  handleClick,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const deviceStatus = db.ref(`/systems/system_1/devices/${id}/status`);
    deviceStatus.on('value', (snapshot) => {
      if (snapshot.exists()) {
        dispatch(setDeviceStatus(id, snapshot.val()));
      }
    });
  }, [dispatch]);
  return (
    <StyledItem isGroup={isGroup}>
      <Icon className='icon' />
      <h4 className='name'>
        <Link to={`/devices/info/${id}`} className='link'>
          {name}
        </Link>
      </h4>
      {groupStatus !== undefined && (
        <ActivateButton
          isActive={isActive}
          groupStatus={groupStatus}
          onClick={handleClick}
        />
      )}
      {groupStatus === undefined && (
        <ActivateButton isActive={isActive} onClick={handleClick} />
      )}
    </StyledItem>
  );
};

export default Item;
