import styled from 'styled-components';

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  grid-template-rows: 1fr;
  grid-template-areas: 'title indicator';
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 4px rgba(75, 79, 79, 0.5);
  background-color: var(--lightest-neutral);

  align-items: center;

  &:active {
    box-shadow: none;
    border: 1px solid var(--lightest-secundary);
    transform: scale(0.98) translate(0, 10%);
  }
  h4 {
    margin: 0;
    grid-area: title;
  }
`;

export default StyledCard;
