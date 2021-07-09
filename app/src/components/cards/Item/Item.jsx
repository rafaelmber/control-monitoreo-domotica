import React from 'react';
import StyledItem from './Item.styles';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

const Item = ({ Icon, name, isActive }) => {
  return (
    <StyledItem>
      <Icon className='icon' />
      <h4>{name}</h4>
      <ActivateButton isActive={isActive} />
    </StyledItem>
  );
};

export default Item;
