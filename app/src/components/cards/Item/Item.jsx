import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StyledItem from './Item.styles';
import db from '@/services/firebase';
import { setDeviceStatus } from '@/store/devices/devices.actions';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

import { onStatusListener } from '@/services/firebase';

//import OutletIcon from '@assets/outlet.svg';
//import BulbIcon from '@assets/bulb.svg';

const Item = ({ Icon, id, name, isActive, handleClick }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const deviceStatus = db.ref(`/systems/system_1/devices/${id}/status`);
    // deviceStatus.on('value', (snapshot) => {
    //   if (snapshot.exists()) {
    //     dispatch(setDeviceStatus(id, snapshot.val()));
    //   }
    // });

    const snapshot = onStatusListener(id);
    if (snapshot.exists()) {
      dispatch(setDeviceStatus(id, snapshot.val()));
    }
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
