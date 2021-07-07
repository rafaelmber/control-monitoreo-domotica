import styled from 'styled-components';

const StyledNavBarItem = styled.div`
  background-color: ${({ isActive }) =>
    isActive ? 'var(--primary)' : 'var(--lightest-neutral)'};
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
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
`;

export default StyledNavBarItem;
