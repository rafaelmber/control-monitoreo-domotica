import styled from 'styled-components';

const StyledAddEnviromentPage = styled.div`
  .content {
    display: flex;
  }
  .label {
    display: block;
  }
  .button {
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
  }
  .content {
    color: var(--neutral);
  }
  @media screen and (min-width: 1366) {
    grid-template-columns: 2rem 1fr;
  }
`;

export default StyledAddEnviromentPage;
