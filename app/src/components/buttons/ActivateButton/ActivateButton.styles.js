import styled from 'styled-components';

const StyledActivateButton = styled.button`
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid var(--neutral);
  border-radius: 50%;
  box-shadow: 0 4px var(--darkest-secundary);
  &:active {
    transform: scale(0.9);
    transform: translate(0, 20%);
    box-shadow: none;
  }

  background-color: ${({ isActive }) => {
    if (isActive === false) {
      return 'var(--dark-red)';
    } else if (isActive === true) {
      return 'var(--green)';
    } else {
      return 'var(--secundary)';
    }
  }};
`;

export default StyledActivateButton;

// background-color: ${({ isActive, groupStatus }) => {
//   if (groupStatus !== undefined) {
//     if (groupStatus === 0) {
//       return 'var(--dark-red)';
//     } else if (groupStatus === 1) {
//       return 'var(--secundary)';
//     } else {
//       return 'var(--green)';
//     }
//   } else {
//     return isActive ? 'var(--green)' : 'var(--dark-red)';
//   }
// }};
