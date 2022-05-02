import styled from 'styled-components';

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .group__title {
    display: grid;
    grid-template-columns: 24px 1fr auto;
    color: rgba(146, 139, 139, 0.7);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .group__items {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding-left: 30px;
  }
`;
export default StyledGroup;
