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
    max-height: 90vh;
    width: 70vw;
    background-color: var(--lightest-neutral);
    margin: 15px;
    border: 1px solid var(--light-neutral);
    border-radius: 10px;
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr minmax(3fr, 50vh) 2fr;
    overflow: hidden;
  }
  .content-list {
    max-height: 60vh;
    overflow-y: scroll;
  }
  .exit-button {
    border: none;
    text-align: right;
    background-color: transparent;
    cursor: pointer;
  }
  .exit-icon {
    fill: var(--red);
    transform: scale(1.2);
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
`;

export default StyledModal;
