import styled from 'styled-components';

const StyledMoreButtonItem = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: var(--lightest-neutral);
  box-shadow: 0 2px rgba(75, 79, 79, 0.5);

  &:active {
    background-color: var(--lightest-secundary);
    transform: scale(0.9);
  }
  .link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--neutral);
    padding: 10px;
  }
`;

export default StyledMoreButtonItem;
