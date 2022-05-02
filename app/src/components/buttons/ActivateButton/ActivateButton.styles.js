import styled from 'styled-components';

const StyledActivateButton = styled.div`
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid var(--neutral);
  border-radius: 50%;
  box-shadow: 0 4px var(--darkest-secundary);

  background-color: ${({ isActive, groupStatus }) => {
    if (groupStatus !== undefined) {
      if (groupStatus === 0) {
        return 'var(--dark-red)';
      } else if (groupStatus === 1) {
        return 'var(--secundary)';
      } else {
        return 'var(--green)';
      }
    } else {
      return isActive ? 'var(--green)' : 'var(--dark-red)';
    }
  }};
  &:active {
    transform: scale(0.9);
    transform: translate(0, 20%);
    box-shadow: none;
  }
`;

export default StyledActivateButton;
