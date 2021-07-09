import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px rgba(75, 79, 79, 0.5);
  margin-bottom: 15px;

  .header {
    display: grid;
    grid-template-columns: 1fr 24px;
    border-bottom: 1px solid rgba(75, 79, 79, 0.5);
    margin-bottom: 10px;
    & h3 {
      margin: 0;
    }
  }
`;

export default StyledCard;
