import styled from 'styled-components';

const StyledNavBar = styled.nav`
  grid-area: navbar;

  display: flex;
  flex-direction: row;
  background-color: var(--lightest-neutral);
  justify-content: left;
  align-items: center;

  @media screen and (min-width: 1366px) {
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px;
  }
`;

export default StyledNavBar;
