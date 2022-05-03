import styled from 'styled-components';

const StyledMainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 1fr 4rem;
  grid-template-areas: 'header' 'content' 'navbar';
  overflow: hidden;

  .header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    background-color: var(--primary);
    color: var(--lightest-neutral);
    padding: 5px 10px;
    align-items: center;
  }
  .header__button {
    border: none;
    padding: 0;
    background-color: transparent;
    width: 54px;
    height: 54px;
  }
  .header__icon {
    fill: var(--lightest-neutral);
    width: 100%;
    height: 100%;
  }
  .content {
    box-sizing: border-box;
    grid-area: content;
    overflow: scroll;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .nav {
    grid-area: navbar;
  }
  @media screen and (min-width: 1366px) {
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 3rem 1fr;
    grid-template-areas: 'navbar header' 'navbar content';

    .content {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export default StyledMainWrapper;
