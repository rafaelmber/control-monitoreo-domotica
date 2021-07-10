import React from 'react';
import StyledSimpleCard from './SimpleCard.styles';

const SimpleCard = ({ name }) => {
  return (
    <StyledSimpleCard>
      <h4>{name}</h4>
    </StyledSimpleCard>
  );
};

export default SimpleCard;
