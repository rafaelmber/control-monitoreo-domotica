import styled from 'styled-components';

const StyledContextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: fit-content;
  padding: 5px;

  border: none;
  border-radius: 15%;
  box-shadow: 1px 4px rgba(75, 79, 79, 0.5);
  background-color: ${({ status }) => {
    return status ? 'var(--green)' : 'var(--red)';
  }};
`;

export default StyledContextButton;
