import styled from 'styled-components';

const StyledMainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  color: var(--lightest-neutral);
  padding: 5px 10px;
  align-items: center;
  .button {
    border: none;
    padding: 0;
    background-color: transparent;
    width: 54px;
    height: 54px;
  }
  .icon {
    fill: var(--lightest-neutral);
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1366px) {
    .button {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default StyledMainHeader;
