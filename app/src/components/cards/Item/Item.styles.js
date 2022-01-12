import styled from 'styled-components';

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr auto;
  margin-bottom: 14px;
  align-items: center;
  .name {
    color: var(--neutral);
    font-size: 1.56rem;
  }
  .icon {
    width: 24px;
  }
`;

export default StyledItem;
