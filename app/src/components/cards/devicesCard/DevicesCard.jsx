import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import StyledDevicesCard from './DevicesCard.styles';
import Group from '../group/Group';
import ContentWrapper from '@components/layout/wrapper/ContentWrapper/ContentWrapper';
import GroupButton from '@components/buttons/GroupButton/GroupButton';

const DevicesCard = ({ id, name, devices }) => {
  const groups = useSelector((state) => {
    let typesArray = [];
    state.types.forEach((type) => {
      const devicesArray = devices.filter((device) => {
        return device.type === type.id;
      });
      typesArray.push({ ...type, devices: devicesArray });
    });
    return typesArray;
  });

  return (
    <StyledDevicesCard>
      <ContentWrapper>
        <div className='card-header'>
          <h3 className='card-header__title'>
            {id === undefined && name}
            {id !== undefined && (
              <Link to={`/rooms/info/${id}`} className='card-header__link'>
                {name}
              </Link>
            )}
          </h3>
          <GroupButton
            devices={devices}
            name={name}
            className='card-header__button'
          />
        </div>
        <div className='card__groups'>
          {groups &&
            groups.map((group) => {
              return <Group key={group.id} {...group} />;
            })}
        </div>
      </ContentWrapper>
    </StyledDevicesCard>
  );
};

export default DevicesCard;
