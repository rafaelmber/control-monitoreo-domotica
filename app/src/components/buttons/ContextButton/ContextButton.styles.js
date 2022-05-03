import styled from 'styled-components';

const StyledContextButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 15px;

  border: none;
  border-radius: 15px;
  box-shadow: 1px 4px rgba(75, 79, 79, 0.5);
  font-weight: bold;

  color: var(--lightest-neutral);

  .icon {
    max-height: 50px;
    fill: var(--lightest-neutral);
  }

  ${({ type }) => {
    switch (type) {
      case 'primary': {
        return `background-color: var(--dark-primary);`;
      }
      case 'secundary': {
        return `background-color: var(--secundary);`;
      }
      case 'success': {
        return `background-color: var(--green);`;
      }
      case 'danger': {
        return `background-color: var(--red);`;
      }
      default: {
        return `
          background-color: var(--lightest-primary);
          color: var(--neutral);
          .icon{
            fill: var(--neutral);
          }
        `;
      }
    }
  }}

  &:hover {
    transform: scale(0.98);
  }
`;

export default StyledContextButton;
