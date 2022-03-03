import styled from 'styled-components';

const StyledAddEnviromentPage = styled.div`
  .content {
    display: flex;
    color: var(--neutral);
  }
  .content-wrapper {
    border: 1px solid red;
    display: flex;
  }
  .button {
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
  }
  .insert__name {
    padding: 10px;
  }
  .title {
    border: none;
    border-bottom: 1px solid var(--light-neutral);
    padding: 5px;
    width: 90%;
  }
  .title::placeholder {
    color: var(--light-neutral);
    font-size: 1.56rem;
  }
  .devices-list {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .device-item {
    margin-right: 15px;
  }
  .column-names {
    display: flex;
    justify-content: space-between;
    color: var(--light-neutral);
  }
  .add-button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    background-color: transparent;
    color: var(--light-neutral);
  }
  .plus-icon {
    fill: var(--light-neutral);
  }
  .save-button {
    border: 1px solid red;
    align-self: center;
    justify-self: center;
    justify-items: center;
  }
  .button-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .header h2 {
    font-size: 10px;
  }

  @media screen and (min-width: 1366) {
    grid-template-columns: 2rem 1fr;
  }
`;

export default StyledAddEnviromentPage;
