import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledPageWrapper from './PageWrapper.styles';
import Wrapper from '@components/layout/wrapper/Wrapper';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import HeaderBackButton from '@components/layout/HeaderBackButton/HeaderBackButton';
const PageWrapper = ({ name, children }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('..');
  };
  return (
    <StyledPageWrapper>
      <Wrapper>
        <HeaderBackButton
          text={name}
          className='header'
          handleClick={handleBack}
          options={[]}
        />
        <div className='content'>
          <ContentWrapper>{children}</ContentWrapper>
        </div>
      </Wrapper>
    </StyledPageWrapper>
  );
};

export default PageWrapper;
