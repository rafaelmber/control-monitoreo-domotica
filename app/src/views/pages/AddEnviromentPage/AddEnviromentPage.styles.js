import styled from 'styled-components';

const StyledAddEnviromentPage = styled.div`
  background-color: var(--primary);
  color: var(--lightest-neutral);
  padding: 5px 15px;
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  h2 {
    margin: 0;
  }
  .more-icon {
    width: 100%;
    height: 100%;
    fill: var(--lightest-neutral);
  }
  @media screen and (min-width: 1366) {
    grid-template-columns: 2rem 1fr;
  }
`;

export default StyledAddEnviromentPage;
