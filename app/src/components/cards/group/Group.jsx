import React from 'react';
import db from '@/services/firebase';
import StyledGroup from './Group.styles';
import Item from '../Item/Item';
import BulbIcon from '@assets/bulb.svg';
import OutletIcon from '@assets/outlet.svg';
import ArrowIcon from '@assets/arrow.svg';

import GroupButton from '@components/buttons/GroupButton/GroupButton';

const Group = ({ name, devices }) => {
  const handleItemClick = async (id, status) => {
    const deviceStatus = db.ref(`devices/${id}/`);
    await deviceStatus.update({ status: !status });
  };
  let Icon;
  if (name === 'Luminarias') {
    Icon = BulbIcon;
  } else {
    Icon = OutletIcon;
  }
  return (
    <StyledGroup>
      {devices.length !== 0 && (
        <div className='group__title'>
          <Icon />
          {name}
          <GroupButton devices={devices} name={name} />
        </div>
      )}
      <div className='group__items'>
        {devices &&
          devices.map((device) => {
            return (
              <Item
                key={device.id}
                Icon={ArrowIcon}
                id={device.id}
                name={device.name}
                isActive={device.status}
                handleClick={() => {
                  handleItemClick(device.id, device.status);
                }}
              />
            );
          })}
      </div>
    </StyledGroup>
  );
};

export default Group;
