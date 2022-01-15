import styled from 'styled-components';

const StyledAddEnviromentPage = styled.div`
  .header {
    background-color: var(--primary);
    color: var(--lightest-neutral);
    padding: 5px 15px;
    display: grid;
    grid-template-columns: 30px 1fr 60px;
    align-items: center;
    margin: 0;
  }
  .header__link {
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  h4 {
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
