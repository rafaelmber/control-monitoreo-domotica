import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StyledCard from './Card.styles';
import Group from './group/Group';
import ActivateButton from '../buttons/ActivateButton/ActivateButton';
import ActivateAllModal from '../layout/modal/ActiveAllModel/ActivateAllModal';

const Card = ({ name, devices }) => {
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
        devices={devices}
        setGroupButton={setGroupButton}
      />
      {groups &&
        groups.map((group) => {
          return (
            <Group
              key={group.id}
              {...group}
              handleGroupClick={handleGroupClick}
            />
          );
        })}
    </StyledCard>
  );
};

export default Card;
