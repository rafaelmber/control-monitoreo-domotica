import styled from 'styled-components';

const StyledEnviromentMain = styled.div`
  width: 100%;
  height: 100%;

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    gap: 30px;
  }
  .message-text {
    text-align: center;
    flex-grow: 1;
  }
  .message-button {
    flex-grow: 2;
  }
`;
export default StyledEnviromentMain;
