import styled from 'styled-components';

const StyledActivateButton = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid var(--dark-secundary);
  box-shadow: 0 4px var(--darkest-secundary);
  background-color: ${({ isActive }) => {
    return isActive ? 'var(--green)' : 'var(--dark-red)';
  }};
  &:active {
    transform: scale(0.9);
    transform: translate(0, 20%);
    box-shadow: none;
  }
`;

export default StyledActivateButton;
