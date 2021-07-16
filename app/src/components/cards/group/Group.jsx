import React, { useState, useEffect } from 'react';
import db from '@/services/firebase';
import StyledGroup from './Group.styles';
import Item from '../Item/Item';
import BulbIcon from '@assets/bulb.svg';
import OutletIcon from '@assets/outlet.svg';
import ArrowIcon from '@assets/arrow.svg';

const Group = ({ name, devices }) => {
  const [groupStatus, setGroupStatus] = useState(0);

  useEffect(() => {
    handleGroupStatus();
  }, [devices]);

  const handleGroupStatus = () => {
    if (
      devices.every((device) => {
        return device.status === false;
      })
    ) {
      setGroupStatus(0);
    } else if (
      devices.every((device) => {
        return device.status === true;
      })
    ) {
      setGroupStatus(2);
    } else {
      setGroupStatus(1);
    }
  };

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
      <Item Icon={Icon} name={name} isGroup={true} groupStatus={groupStatus} />
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
