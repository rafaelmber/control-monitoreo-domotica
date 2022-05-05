import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StyledItem from './Item.styles';
import { setDeviceStatus } from '@/store/devices/devices.actions';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

import { deviceStatusRef } from '@/services/firebase';

//import OutletIcon from '@assets/outlet.svg';
//import BulbIcon from '@assets/bulb.svg';

const Item = ({ Icon, id, name, isActive, handleClick }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const statusRef = deviceStatusRef(id);
    statusRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        dispatch(setDeviceStatus(id, snapshot.val()));
      }
    });
  }, [dispatch]);
  return (
    <StyledItem>
      <Icon className='icon' />
      <h4 className='name'>
        <Link to={`/devices/info/${id}`} className='link'>
          {name}
        </Link>
      </h4>
      <ActivateButton isActive={isActive} onClick={handleClick} />
    </StyledItem>
  );
};

export default Item;
