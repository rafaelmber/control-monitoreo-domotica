import React from 'react';
import StyledActivateButton from './ActivateButton.styles';

const ActivateButton = ({ isActive, onClick }) => {
  return <StyledActivateButton isActive={isActive} onClick={onClick} />;
};
export default ActivateButton;
