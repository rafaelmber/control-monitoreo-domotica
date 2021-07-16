import React from 'react';
import StyledActivateButton from './ActivateButton.styles';

const ActivateButton = ({ isActive, onClick, groupStatus }) => {
  return (
    <StyledActivateButton
      isActive={isActive}
      groupStatus={groupStatus}
      onClick={onClick}
    ></StyledActivateButton>
  );
};
export default ActivateButton;
