import styled from 'styled-components';

const StyledSimpleCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px rgba(75, 79, 79, 0.5);
  margin-bottom: 15px;
  background-color: var(--lightest-neutral);

  &:active {
    box-shadow: none;
    border: 1px solid var(--lightest-secundary);
    transform: scale(0.98) translate(0, 10%);
  }
  h4 {
    margin: 0;
  }
`;

export default StyledSimpleCard;
