import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0.5px 4px rgba(75, 79, 79, 0.5);
  margin-bottom: 15px;
  background-color: var(--lightest-neutral);
  display: flex;
  flex-direction: column;

  .center {
    justify-self: center;
    border: 5px solid red;
  }
`;

export default StyledContentWrapper;