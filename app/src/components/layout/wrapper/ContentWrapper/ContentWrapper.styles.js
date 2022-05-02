import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  height: min-content;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0.5px 4px rgba(75, 79, 79, 0.5);
  background-color: var(--lightest-neutral);

  .center {
    justify-self: center;
  }
`;

export default StyledContentWrapper;
