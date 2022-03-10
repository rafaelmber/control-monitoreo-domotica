import React from 'react';
import StyledListDevices from './ListDevices.styles';
import ArrowIcon from '@assets/arrow.svg';

const ListItems = ({ name, type, handleClick }) => {
  return (
    <StyledListDevices onClick={handleClick}>
      <ArrowIcon className='icon' />
      <div className='container'>
        <p className='name-device'>{name}</p>
        <small className='type-device'>{type.name}</small>
      </div>
    </StyledListDevices>
  );
};

export default ListItems;
