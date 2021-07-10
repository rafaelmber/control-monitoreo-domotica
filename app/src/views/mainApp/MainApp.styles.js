import styled from 'styled-components';

const StyledMainApp = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5rem;
  grid-template-areas: 'content-app' 'footer';

  .content {
    grid-area: content-app;
    height: 100%;
    overflow: hidden;
  }
  .nav {
    grid-area: footer;
  }
`;

export default StyledMainApp;
