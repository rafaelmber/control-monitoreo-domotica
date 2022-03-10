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
  background-color: ${({ status }) => {
    return status ? 'var(--green)' : 'var(--red)';
  }};
  font-weight: bold;
  color: var(--neutral);
`;

export default StyledContextButton;
