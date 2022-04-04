import React from 'react';
import StyledListDevices from './ListDevices.styles';
import ArrowIcon from '@assets/arrow.svg';
import ActiveButton from '@components/buttons/ActivateButton/ActivateButton';

const ListItems = ({
  name,
  type,
  status,
  handleClick,
  children,
  handleStatusClick,
}) => {
  return (
    <StyledListDevices
      onClick={() => {
        handleClick ? handleClick() : '';
      }}
    >
      <ArrowIcon className='arrow-icon' />
      <div className='container'>
        <p className='name-device'>{name}</p>
        <small className='type-device'>{type.name}</small>
      </div>
      {status !== undefined && (
        <ActiveButton
          className='status'
          isActive={status}
          onClick={handleStatusClick}
        />
      )}
      {children !== undefined && <div className='children'>{children}</div>}
    </StyledListDevices>
  );
};

export default ListItems;
