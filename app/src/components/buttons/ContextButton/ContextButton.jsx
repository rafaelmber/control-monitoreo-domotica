import React from 'react';
import StyledContextButton from './ContextButton.styles';

const ContextButton = ({ text, status, Icon, onClick }) => {
  return (
    <StyledContextButton status={status} onClick={onClick}>
      <p className='text'>{text}</p>
      {Icon && <Icon className='icon' />}
    </StyledContextButton>
  );
};

export default ContextButton;
