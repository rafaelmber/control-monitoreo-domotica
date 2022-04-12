import styled from 'styled-components';

const StyledLogin = styled.div`
  background-color: var(--lightest-neutral);
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  /**
  */
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  .buttons {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px 20px;
    & .text-or {
      text-align: center;
      margin: 0;
    }
  }
  .sign-up {
    text-align: center;
  }
  .login-form {
    padding: 0 10px;
  }
`;

export default StyledLogin;
