import React from 'react';
import StyledHeaderBackButton from './HeaderBackButton.styles';
import Header from '../header/Header';
import ArrowIcon from '@assets/arrow_back.svg';

const HeaderBackButton = ({ text, options, handleClick }) => {
  return (
    <StyledHeaderBackButton>
      <button onClick={handleClick} className='back-button'>
        <ArrowIcon className='icon' />
      </button>
      <Header text={text} options={options} />
    </StyledHeaderBackButton>
  );
};

export default HeaderBackButton;
