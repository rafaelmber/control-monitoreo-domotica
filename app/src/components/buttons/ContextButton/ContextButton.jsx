import React from 'react';
import StyledContextButton from './ContextButton.styles';

const ContextButton = ({ text, Icon, onClick, type }) => {
  return (
    <StyledContextButton onClick={onClick} type={type}>
      <p className='text'>{text}</p>
      {Icon && <Icon className='icon' />}
    </StyledContextButton>
  );
};

export default ContextButton;
