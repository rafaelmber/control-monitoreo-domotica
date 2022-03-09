//Dependencias
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';

//Recursos dentro del proyecto que se necesitan
import StyledMainApp from './MainApp.styles'; //Estilos de este componente
import db from '@/services/firebase'; //Conexión con la base de datos de Firebase
// Pagínas dentro de la ventana principal
import RoomPage from '@views/pages/Rooms/RoomPage/RoomPage';
import DevicesPage from '@views/pages/DevicesPage/DevicesPage';
import EnviromentPage from '@views/pages/Enviroments/EnviromentPage/EnviromentPage';

const MainApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //Tomar datos desde Firebase al iniciar el componente
    db.ref('/').once('value', (snapshot) => {
      //Se almacenan los dispositivos dentro del Store central de Redux
      dispatch({
        type: 'GET_DEVICES',
        payload: snapshot.val(),
      });
    });
    // Tomar los tipos de Firebase una sola vez
    db.ref('types/').once('value', (snapshot) => {
      //Almacenar los tipos en el store
      dispatch({
        type: 'GET_GROUPS',
        payload: snapshot.val(),
      });
    });
    db.ref('enviroments/').once('value', (snapshot) => {
      dispatch({
        type: 'GET_ENVIROMENTS',
        payload: snapshot.val(),
      });
    });
  }, [dispatch]);
  return (
    <StyledMainApp>
      <Switch>
        {/*  Se definen las rutas de las diferentes pestañas que tiene la página principal

            Devices es donde se van a encontrar todos los dispositivos listados
            Enviroments es donde se van a encontrar botones para programar ambientes y ejecutarlos
            Sensors es la página donde se van a visualizar las mediciones de los sensores y la información correspondiente a ellos
            / o root es donde se encuntran los dispositivos clasificados por habitación

            Cada ruta tiene su Componente asociado, estos componentes se encuentran dentro de la carpeta Pages
          */}
        <Route path={'/devices'} component={DevicesPage} />
        <Route path={'/enviroments'} component={EnviromentPage} />
        <Route path={'/rooms'} component={RoomPage} />
        <Route path={'/'}>
          <Redirect to={'/rooms'} />
        </Route>
      </Switch>
    </StyledMainApp>
  );
};
export default MainApp;
