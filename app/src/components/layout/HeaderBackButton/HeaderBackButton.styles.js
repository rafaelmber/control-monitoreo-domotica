import styled from 'styled-components';

const StyledHeaderBackButton = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  .back-button {
    background-color: var(--primary);
    border: none;
    padding: 5px;
    text-decoration: none;
  }
  .icon {
    fill: var(--lightest-neutral);
  }
`;

export default StyledHeaderBackButton;
