import styled from 'styled-components';

const StyledMainApp = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 6rem 1fr 5rem;
  grid-template-areas: 'header' 'content-app' 'footer';

  .header {
    grid-area: header;
  }
  .content {
    grid-area: content-app;
    height: 100%;
    overflow: hidden;
  }
  .footer {
    grid-area: footer;
  }
`;

export default StyledMainApp;
