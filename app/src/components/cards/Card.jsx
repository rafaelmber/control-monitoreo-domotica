import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledCard from './Card.styles';
import db from '@/services/firebase';
import Group from './group/Group';
import ActivateButton from '../buttons/ActivateButton/ActivateButton';
import ActivateAllModal from '../layout/modal/ActiveAllModel/ActivateAllModal';

const Card = ({ name, devices }) => {
  const dispatch = useDispatch();
  const [groupStatus, setGroupStatus] = useState(0);
  const [groupButton, setGroupButton] = useState(false);
  const groups = useSelector((state) => {
    let groupsArray = [];
    state.groups.forEach((group) => {
      const devicesArray = devices.filter((device) => {
        return device.type === group.id;
      });
      groupsArray.push({ ...group, devices: devicesArray });
    });
    return groupsArray;
  });

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
  const handleGroupClick = () => {
    setGroupButton(true);
  };
  const handleCloseModal = () => {
    setGroupButton(false);
  };

  const handleSetAll = (devices, status) => {
    devices.forEach(async (device) => {
      const deviceReference = db.ref(`devices/${device.id}/`);
      await deviceReference.update({ status: status });
      dispatch({
        type: 'SET_DEVICES_STATUS',
        payload: device.id,
      });
      setGroupButton(false);
    });
  };

  return (
    <StyledCard>
      <div className='header'>
        <h3>{name}</h3>
        <ActivateButton
          isActive
          groupStatus={groupStatus}
          onClick={handleGroupClick}
        />
      </div>
      <ActivateAllModal
        isOpen={groupButton}
        closeModal={handleCloseModal}
        name={name}
        handleSetAll={handleSetAll}
        devices={devices}
      />
      {groups &&
        groups.map((group) => {
          return (
            <Group
              key={group.id}
              {...group}
              handleGroupClick={handleGroupClick}
              handleSetAll={handleSetAll}
            />
          );
        })}
    </StyledCard>
  );
};

export default Card;
