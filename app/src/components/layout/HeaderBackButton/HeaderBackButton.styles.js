import styled from 'styled-components';

const StyledHeaderBackButton = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  margin: 0;
  padding: 0;
  .back-button {
    cursor: pointer;
    background-color: var(--primary);
    border: none;
    padding: 5px;
    text-decoration: none;
  }
  .icon {
    width: 100%;
    height: 100%;
    fill: var(--lightest-neutral);
  }
  .icon:hover {
    transform: scale(1.1);
  }
`;

export default StyledHeaderBackButton;
