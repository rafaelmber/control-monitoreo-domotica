import React from 'react';
import { useHistory } from 'react-router-dom';
import StyledPageWrapper from './PageWrapper.styles';
import Wrapper from '@components/layout/wrapper/Wrapper';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import HeaderBackButton from '@components/layout/HeaderBackButton/HeaderBackButton';
const PageWrapper = ({ name, children }) => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
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
