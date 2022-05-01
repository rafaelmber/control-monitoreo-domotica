import React from 'react';
import StyledMainHeader from './MainHeader.styles';

import MoreIcon from '@assets/more.svg';

const MainHeader = ({ title }) => {
  return (
    <StyledMainHeader>
      <h2>{title}</h2>
      <button className='button'>
        <MoreIcon className='icon' />
      </button>
    </StyledMainHeader>
  );
};

export default MainHeader;
