import React from 'react';
import StyledGroup from './Group.styles';
import Item from '../Item/Item';
import BulbIcon from '@assets/bulb.svg';
import OutletIcon from '@assets/outlet.svg';
import ArrowIcon from '@assets/arrow.svg';
const Group = ({ type, devices }) => {
  let Icon;
  if (type === 'Luminarias') {
    Icon = BulbIcon;
  } else {
    Icon = OutletIcon;
  }
  return (
    <StyledGroup>
      <Item Icon={Icon} name={type} isGroup />
      <div className='group__items'>
        {devices.map((device) => {
          return (
            <Item
              key={device.id}
              Icon={ArrowIcon}
              id={device.id}
              name={device.name}
              isActive={device.status}
            />
          );
        })}
      </div>
    </StyledGroup>
  );
};

export default Group;
