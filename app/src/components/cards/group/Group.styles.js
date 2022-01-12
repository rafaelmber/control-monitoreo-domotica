import styled from 'styled-components';

const StyledGroup = styled.div`
  & h5 {
    margin: 0;
  }
  & h4 {
    margin: 0;
  }
  .group__title {
    display: grid;
    grid-template-columns: 24px 1fr auto;
    margin-bottom: 14px;

    color: rgba(146, 139, 139, 0.7);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .group__items {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
  }
`;
export default StyledGroup;
