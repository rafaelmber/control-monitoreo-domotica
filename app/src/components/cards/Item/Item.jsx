import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import StyledItem from './Item.styles';
import db from '@/services/firebase';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

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
  useEffect(async () => {
    const deviceStatus = db.ref(`devices/${id}/status`);
    await deviceStatus.on('value', (snapshot) => {
      if (snapshot.exists()) {
        dispatch({
          type: 'GET_DEVICE_STATUS',
          payload: { id, status: snapshot.val() },
        });
      }
    });
  }, [dispatch]);
  return (
    <StyledItem isGroup={isGroup}>
      <Icon className='icon' />
      <h4 className='name'>{name}</h4>
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
