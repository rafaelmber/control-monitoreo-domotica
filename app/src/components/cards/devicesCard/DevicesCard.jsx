import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import StyledDevicesCard from './DevicesCard.styles';
import Group from '../group/Group';
import ContentWrapper from '@components/layout/wrapper/ContentWrapper/ContentWrapper';
import GroupButton from '@components/buttons/GroupButton/GroupButton';

const DevicesCard = ({ id, name, devices }) => {
  const types = useSelector((state) => {
    const typesArray = state.types.map((type) => {
      const devicesArray = devices.filter((device) => {
        return device.type === type.id;
      });
      return { ...type, devices: devicesArray };
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
          <GroupButton devices={devices} name={name} />
        </div>
        <div className='card__groups'>
          {types.length !== 0 &&
            types.map((type) => {
              return <Group key={type.id} {...type} />;
            })}
        </div>
      </ContentWrapper>
    </StyledDevicesCard>
  );
};

export default DevicesCard;
