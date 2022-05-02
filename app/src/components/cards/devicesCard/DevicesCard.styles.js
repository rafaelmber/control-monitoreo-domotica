import styled from 'styled-components';

const StyledDevicesCard = styled.div`
  .header {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid rgba(75, 79, 79, 0.5);
    margin-bottom: 10px;
    & h3 {
      margin: 0;
      margin-right: 10px;
    }
    .link {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default StyledDevicesCard;
