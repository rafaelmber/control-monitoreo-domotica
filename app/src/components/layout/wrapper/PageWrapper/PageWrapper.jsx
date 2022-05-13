import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledPageWrapper from './PageWrapper.styles';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import BackIcon from '@assets/arrow_back.svg';

const PageWrapper = ({ name, children }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('..');
  };
  return (
    <StyledPageWrapper>
      <header className='header'>
        <button className='header__button' onClick={handleBack}>
          <BackIcon className='header__icon' />
        </button>
        <h3 className='header__title'>{name}</h3>
      </header>
      <div className='content'>
        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </StyledPageWrapper>
  );
};

export default PageWrapper;
