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
  }

  .content {
    box-sizing: border-box;
    grid-area: content;
    height: 100%;
    overflow: scroll;
    padding: 15px;
  }
  .nav {
    grid-area: navbar;
  }
  @media screen and (min-width: 1366px) {
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'navbar content-app';
  }
`;
export default StyledMainWrapper;
