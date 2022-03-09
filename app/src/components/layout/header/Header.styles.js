import styled from 'styled-components';
const StyledHeader = styled.div`
  background-color: var(--primary);
  color: var(--lightest-neutral);
  padding: 5px 15px;
  display: grid;
  grid-template-columns: 1fr 60px;
  align-items: center;
  max-height: 100%;
  overflow-y: hidden;
  h2 {
    margin: 0;
    text-transform: capitalize;
  }
  .more-icon {
    width: 100%;
    height: 100%;
    fill: var(--lightest-neutral);
    cursor: pointer;
  }
  .more-icon:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 1366) {
    grid-template-columns: 2rem 1fr;
  }
`;

export default StyledHeader;
