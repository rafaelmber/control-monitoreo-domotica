import styled from 'styled-components';

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  grid-template-rows: 1fr;
  grid-template-areas: 'title indicator';
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
  .link {
    text-decoration: none;
    color: inherit;
  }
  .indicator {
    grid-area: indicator;
  }
`;

export default StyledCard;
