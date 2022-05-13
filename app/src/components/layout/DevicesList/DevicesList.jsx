import React from 'react';
import { Link } from 'react-router-dom';

import StyledDevicesList from './DevicesList.styles';
import BulbIcon from '@assets/bulb.svg';
import OutletIcon from '@assets/outlet.svg';

const DevicesList = ({ name, id, type, children, room }) => {
  let Icon = null;
  if (type === 'type_1') {
    Icon = BulbIcon;
  } else {
    Icon = OutletIcon;
  }
  return (
    <StyledDevicesList>
      <div className='device-info'>
        <Icon className='device-info__icon' />
        <Link to={`/devices/info/${id}`} className={'device-info__link'}>
          <b className='device-info__name'>{name}</b>
          {room !== undefined && (
            <small className='device-info__room'>{room}</small>
          )}
        </Link>
      </div>
      <div className='children'>{children}</div>
    </StyledDevicesList>
  );
};

export default DevicesList;
