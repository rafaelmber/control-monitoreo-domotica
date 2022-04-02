import React from 'react';
import StyledContextButton from './ContextButton.styles';

const ContextButton = ({ text, status, Icon, onClick, textColor, bgColor }) => {
  return (
    <StyledContextButton
      status={status}
      onClick={onClick}
      bgColor={bgColor}
      textColor={textColor}
    >
      <p className='text'>{text}</p>
      {Icon && <Icon className='icon' />}
    </StyledContextButton>
  );
};

export default ContextButton;
