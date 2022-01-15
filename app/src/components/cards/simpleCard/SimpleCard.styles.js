import styled from 'styled-components';

const StyledSimpleCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  grid-template-rows: 1fr;
  grid-template-areas: 'title indicator';
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px rgba(75, 79, 79, 0.5);
  margin-bottom: 15px;

  &:active {
    box-shadow: none;
    border: 1px solid var(--lightest-secundary);
    transform: scale(0.98) translate(0, 10%);
  }
  h4 {
    margin: 0;
    grid-area: title;
  }
  .indicator {
    grid-area: indicator;
    border-radius: 50%;

    background-color: var(--green);
    border: 1px solid var(--light-neutral);
  }
`;

export default StyledSimpleCard;
