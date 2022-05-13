import React from 'react';
import StyledListDevices from './ListDevices.styles';
import BulbIcon from '@assets/bulb.svg';
import OutletIcon from '@assets/outlet.svg';

import { Link } from 'react-router-dom';

const ListDevices = ({ name, id, type, children }) => {
  let Icon = null;
  if (type === 'type_1') {
    Icon = BulbIcon;
  } else {
    Icon = OutletIcon;
  }
  return (
    <StyledListDevices>
      <Icon className='type-icon' />
      <div className='device-info'>
        <Link to={`/devices/info/${id}`} className={'device-info__link'}>
          <b className='device-info__name'>{name}</b>
        </Link>
      </div>
      <div className='children'>{children}</div>
    </StyledListDevices>
  );
};

export default ListDevices;

// {
//   showRoomName && (
//     <small className='device-info__room'>Habitación</small>
//   );
// }
//
// {
//   status !== undefined && (
// <ActivateButton
//   className='device__status'
//   isActive={status}
//   onClick={handleStatusClick}
// />;
//   );
// }
// {
//   children !== undefined && <div className='children'>{children}</div>;
// }
