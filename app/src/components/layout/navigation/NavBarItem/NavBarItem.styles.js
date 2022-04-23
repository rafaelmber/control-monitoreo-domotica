import styled from 'styled-components';

const StyledNavBarItem = styled.button`
  border: none;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--primary)' : 'var(--lightest-neutral)'};
  height: 100%;
  width: 100%;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  .link {
    height: 100%;
    width: 100%;
    align-items: center;
    justify-self: center;

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    background-color: transparent;
    display: flex;
  }
  .icon {
    width: 80%;
    height: 80%;
    padding: 2px;
    fill: ${({ isActive }) =>
      isActive ? 'var(--lightest-neutral)' : 'var(--light-neutral)'};
  }
  @media screen and (min-width: 1366px) {
    .link {
      flex-direction: column;
    }
  }
`;

export default StyledNavBarItem;
