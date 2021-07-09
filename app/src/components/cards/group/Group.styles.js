import styled from 'styled-components';

const StyledGroup = styled.div`
  & h5 {
    margin: 0;
  }
  & h4 {
    margin: 0;
  }

  .group__items {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
  }
`;
export default StyledGroup;
