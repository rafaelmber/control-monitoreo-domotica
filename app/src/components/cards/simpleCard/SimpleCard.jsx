import React from 'react';
import StyledSimpleCard from './SimpleCard.styles';

const SimpleCard = ({ name, handleClick }) => {
  return (
    <StyledSimpleCard onClick={handleClick} isActive>
      <h4>{name}</h4>
    </StyledSimpleCard>
  );
};

export default SimpleCard;
