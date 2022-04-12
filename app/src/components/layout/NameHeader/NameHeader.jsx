import React from 'react';

import StyledNameHeader from './NameHeader.styles';

import LampIcon from '@assets/lamp.svg';
import ChairIcon from '@assets/chair.svg';

const NameHeader = () => {
  return (
    <StyledNameHeader>
      <div className='header'>
        <h1 className='title'>Smart Home App</h1>
        <div className='icons'>
          <LampIcon className='icon-logo lamp' />
          <ChairIcon className='icon-logo chair' />
        </div>
      </div>
    </StyledNameHeader>
  );
};

export default NameHeader;
