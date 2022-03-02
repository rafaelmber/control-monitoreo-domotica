import styled from 'styled-components';

const StyledDevicesCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 1px 4px rgba(75, 79, 79, 0.5);
  margin-bottom: 15px;
  background-color: var(--lightest-neutral);

  .header {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid rgba(75, 79, 79, 0.5);
    margin-bottom: 10px;
    & h3 {
      margin: 0;
    }
    .link {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default StyledDevicesCard;
