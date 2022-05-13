import styled from 'styled-components';
const StyledPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 4rem 1fr;
  .header {
    display: flex;
    background-color: var(--primary);
    align-items: center;
  }
  .header__button {
    border: none;
    background-color: transparent;
    width: 54px;
    height: 54px;
  }
  .header__icon {
    fill: var(--lightest-neutral);
    width: 100%;
    height: 100%;
  }
  .header__title {
    color: var(--lightest-neutral);
  }
  .content {
    box-sizing: border-box;
    overflow: scroll;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default StyledPageWrapper;
