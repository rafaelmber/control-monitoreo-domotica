import React from 'react';
import StyledActivateButton from './ActivateButton.styles';

const ActivateButton = ({ isActive, isGroup }) => {
  return (
    <StyledActivateButton
      isActive={isActive}
      isGroup={isGroup}
    ></StyledActivateButton>
  );
};
export default ActivateButton;
