import styled from 'styled-components';

const StyledAddEnviromentPage = styled.div`
  h2 {
    background-color: var(--primary);
    color: var(--lightest-neutral);
    padding: 5px 15px;
    display: grid;
    grid-template-columns: 1fr 60px;
    align-items: center;
    margin: 0;
  }
  .icon {
    width: 100%;
    height: 100%;
    fill: var(--lightest-neutral);
  }
  .content {
    display: flex;
  }
  .label {
    display: block;
  }
  @media screen and (min-width: 1366) {
    grid-template-columns: 2rem 1fr;
  }
`;

export default StyledAddEnviromentPage;
