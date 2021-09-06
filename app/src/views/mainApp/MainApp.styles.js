// Estos son los estilos en CSS para la aplicación principal
import styled from 'styled-components';

/* 
Se define la estructura de como se va a visualizar así como el comportamiento responsivo
de la app principal
*/
const StyledMainApp = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5rem;
  grid-template-areas: 'content-app' 'navbar';

  .content {
    grid-area: content-app;
    height: 100%;
    overflow: hidden;
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

export default StyledMainApp;
