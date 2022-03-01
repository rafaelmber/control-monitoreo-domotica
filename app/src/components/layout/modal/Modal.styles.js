import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    background-color: var(--lightest-neutral);
    margin: 15px;
    border: 1px solid var(--light-neutral);
    border-radius: 10px;
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr 3fr;
  }
  .exit-button {
    text-align: right;
    color: var(--neutral);
    cursor: pointer;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
  }
  .turn-on {
    color: var(--lightest-neutral);
    background-color: var(--green);
  }
  .turn-off {
    color: var(--lightest-neutral);
    background-color: var(--dark-red);
  }
`;

export default StyledModal;
