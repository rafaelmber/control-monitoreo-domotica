import React from 'react';
import StyledItem from './Item.styles';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

const Item = ({ Icon, name, isActive, isGroup }) => {
  return (
    <StyledItem isGroup={isGroup}>
      <Icon className='icon' />
      <h4 className='name'>{name}</h4>
      <ActivateButton isActive={isActive} isGroup={isGroup} />
    </StyledItem>
  );
};

export default Item;
