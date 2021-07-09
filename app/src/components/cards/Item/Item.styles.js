import styled from 'styled-components';

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  margin-bottom: 14px;
  align-items: center;
  .name {
    color: ${({ isGroup }) => {
      return isGroup ? ' rgba(146,139,139,0.7)' : 'var(--neutral)';
    }};
    font-size: ${({ isGroup }) => {
      return isGroup ? ' 1.25rem' : '1.56rem';
    }};
  }
  .icon {
    width: 24px;
  }
`;

export default StyledItem;
